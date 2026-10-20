const $list = document.getElementById("lista"),
    $p = document.getElementById("resumen"),
    $btsMostrar = document.getElementById('mostrar');

let productos = [
    { nombre: "Teclado", precio: 35, stock: 4 },
    { nombre: "Ratón", precio: 20, stock: 0 },
    { nombre: "Monitor", precio: 180, stock: 3 },
    { nombre: "Auriculares", precio: 45, stock: 8 }
];
let totalStock = 0;

//tarea 1 ======================================
function estaDisponible(producto) {
    return producto > 0 ? true : false;
}
//tarea 4 ========================================
$btsMostrar.addEventListener("click", () => {
    $list.textContent = "";
    totalStock = 0;
    // tarea 2 ==============================
    for (let i = 0; i < productos.length; i++) {
        console.log(productos[i].nombre + " - " + productos[i].precio + "€-" + productos[i].stock);
        //tarea 3 ==============================
        totalStock += productos[i].stock
        // tarea 5 ==============================
        if (estaDisponible(productos[i].stock)) {
            let $li = document.createElement("li");
            $li.textContent = `${productos[i].nombre} - ${productos[i].precio}euros - cantidad ${productos[i].stock}`;
            $list.append($li);
            //tarea 6 ================================
            $p.textContent = `Hay ${totalStock} productos disponibles.`
        }

    }
     let time = setInterval(()=>{
        $list.textContent = "";
        $p.textContent ="";
        clearInterval(time);
    },5000)
    
    
});