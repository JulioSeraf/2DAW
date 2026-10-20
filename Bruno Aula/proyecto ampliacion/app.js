
"use strict";

// ==================================================
// 1. SELECCIÓN DE ELEMENTOS DEL DOM
// ==================================================

// Guardamos referencias a los elementos HTML.
// Así no necesitamos buscarlos cada vez que los usamos.

const formulario = document.querySelector("#registro");
const nombre = document.querySelector("#nombre");
const email = document.querySelector("#email");
const vista = document.querySelector("#vista");
const mensaje = document.querySelector("#mensaje");
const lista = document.querySelector("#lista");
const total = document.querySelector("#total");
const vaciar = document.querySelector("#vaciar");
const $buscar = document.getElementById("buscar");
const $resBusqueda = document.getElementById("resultadoBusqueda");
const $registrar = document.getElementById("registrar");

$resBusqueda.textContent ="No hay participantes registrados."

// ==================================================
// 2. SALUDO EN TIEMPO REAL
// ==================================================

// El evento "input" se produce cuando cambia el
// contenido del campo: escribir, borrar, pegar, etc.

nombre.addEventListener("input", (event) => {

    // event.target es el elemento que originó el evento.
    // En este caso, el campo de nombre.
    const texto = event.target.value.trim();

    // Si solo hay espacios, trim() devuelve "".
    // Una cadena vacía se considera false.
    if (texto === "") {
        vista.textContent = "";
    } else {
        vista.textContent = `Hola, ${texto}`;
    }
});


// ==================================================
// 3. REGISTRO DE PARTICIPANTES
// ==================================================

// Escuchamos "submit" en el formulario, no "click"
// en el botón. Así funciona tanto al pulsar Registrar
// como al presionar Enter desde un campo.

function filtro (){
    lista.querySelectorAll("li").forEach(el => {
    let elNew = document.createElement("p");
    elNew.textContent = el.textContent.trim().split("eliminar");
    $resBusqueda.append(elNew);
})

if(lista.querySelectorAll("li").length == 0) $resBusqueda.textContent = "No hay participantes registrados.";
}

formulario.addEventListener("submit", (event) => {

    // Evitamos el envío tradicional del formulario.
    // Sin esto, el navegador podría recargar la página.
    event.preventDefault();

    // Eliminamos el mensaje de la operación anterior.
    mensaje.textContent = "";

    // Quitamos espacios al principio y al final.
    // Guardamos los valores limpios en los campos.
    nombre.value = nombre.value.trim();
    email.value = email.value.trim();

    // ----------------------------------------------
    // 3.1. VALIDACIÓN HTML5
    // ----------------------------------------------

    // reportValidity() comprueba restricciones como:
    // - required: el campo no puede estar vacío.
    // - type="email": debe tener formato de correo.
    //
    // Devuelve true si todo es válido y false si no.
    // Si falla, el navegador muestra su aviso.

    if (!formulario.reportValidity()) {
        return;
    }

    // ----------------------------------------------
    // 3.2. VALIDACIÓN PERSONALIZADA
    // ----------------------------------------------

    // HTML required solo comprueba que haya contenido.
    // Nosotros exigimos además dos caracteres mínimos.

    if (nombre.value.length < 2) {
        mensaje.textContent = "Nombre: mínimo 2 caracteres.";

        // Colocamos el foco en el campo incorrecto.
        nombre.focus();

        // return termina esta ejecución del manejador.
        // Por tanto, NO se registra el participante.
        return;
    }

    // ==================================================
    // Ampliación opcional: evitar correos duplicados
    // ==================================================
    // Normalizamos el email del formulario
    const correoNormalizado = email.value.toLowerCase();
    const nombreNormalizado = nombre.value.toLowerCase();

    // Obtenemos todos los li y los ponemos en un Array
    // y buscamos alguna coicidencia
    const duplicado = [...lista.children].some(
        // Comprobamos que cada li obtiene el correo almacenado en su atributo data-email
        li => li.dataset.email === correoNormalizado
    );
    // Si encontramos un duplicado
    if (duplicado) {
        mensaje.textContent = "El correo ya está registrado.";
        email.focus();
        return;
    }


    // ----------------------------------------------
    // 3.3. CREACIÓN DEL PARTICIPANTE
    // ----------------------------------------------

    // Creamos un elemento HTML que todavía no está
    // incorporado al documento.
    // Normalizamos el email del formulario

    const participante = document.createElement("li");
    const btEliminar = document.createElement('button');
    const btEditar = document.createElement('button');
    btEliminar.setAttribute("id","eliminar");
    btEditar.setAttribute("id","editar");
    btEliminar.textContent = "Eliminar";
    btEditar.textContent = "Editar";
    btEliminar.style.cssText = "margin: 0 20px";

     // Para poder comprobar despues si un email existe
    participante.dataset.email = correoNormalizado;
    participante.dataset.nombre = nombreNormalizado;
    

    // textContent introduce texto, no código HTML.
    // Evitamos interpretar como etiquetas lo escrito
    // por el usuario.
    participante.textContent =
        `${nombre.value} — ${email.value}`;
    participante.append(btEditar,btEliminar);

    // Añadimos el nuevo <li> dentro de la lista <ul>.
    lista.append(participante);
    
    btEliminar.addEventListener("click",e =>{
        $resBusqueda.textContent = ""
        lista.removeChild(participante);
          total.textContent = lista.children.length;
        filtro();
    })
    btEditar.addEventListener("click",el =>{
        $registrar.textContent = "Guardar Cambios";
        $registrar.style.backgroundColor = " rgb(174, 248, 174)"
        const div = document.createElement("div");
        const inputName = document.createElement("input","text");
        inputName.setAttribute("placeHolder","NAME:");
        const inputEmail = document.createElement("input","text");
        inputEmail.setAttribute("placeHolder","EMAIL:");

        const labelName = document.createElement("label");
        const labelEmail = document.createElement("label");
        labelName.textContent = "Nuevo valor:"

        div.append(labelName,inputName,labelEmail,inputEmail);
        participante.append(div)
    })

    // ----------------------------------------------
    // 3.4. ACTUALIZACIÓN DEL CONTADOR
    // ----------------------------------------------

    // children.length cuenta los hijos directos.
    // Como cada participante es un <li>, el número
    // coincide con los participantes registrados.
    total.textContent = lista.children.length;

    // ----------------------------------------------
    // 3.5. LIMPIEZA Y CONFIRMACIÓN
    // ----------------------------------------------

    // reset() devuelve los campos a sus valores iniciales.
    formulario.reset();

    // El saludo se limpia expresamente porque reset()
    // no elimina el texto del párrafo #vista.
    vista.textContent = "";

    // Informamos al usuario del resultado.
    mensaje.textContent = "Participante registrado.";

    // Dejamos el cursor en el nombre para facilitar
    // el registro de otra persona.
    nombre.focus();

    $resBusqueda.textContent = "";
    filtro();
});



$buscar.addEventListener("input", e =>{
    let par = lista.querySelectorAll("li");
    par.forEach(el => {
        if(el.dataset.nombre.includes(e.target.value) || el.dataset.email.includes(e.target.value)){
            const $part = document.createElement("p");
            let elNew = el.textContent.trim().toLocaleLowerCase();
            $part.textContent = elNew.split("eliminar");

            $resBusqueda.append($part);
           
        }else{
            $resBusqueda.textContent = "No hay participantes que coincidan con la búsqueda"
        }
    })
    
})

// ==================================================
// 4. VACIADO DE LA LISTA
// ==================================================

// El evento "click" se produce al pulsar el botón.

vaciar.addEventListener("click", () => {

    // Elimina todos los elementos hijos de la lista.
    // El elemento <ul> permanece en el documento.
    lista.replaceChildren();

    // Al no quedar participantes, el contador es cero.
    total.textContent = lista.children.length;
    $resBusqueda.textContent = "";
    // Mostramos confirmación.
    mensaje.textContent = "Lista vacía.";
});
