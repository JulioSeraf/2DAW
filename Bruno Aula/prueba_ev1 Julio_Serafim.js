/**Ejercicio 1 Duración de una emisión (RA2b, c, d, e; RA4b)
1,50 puntos
La emisora registra el comienzo y el final de una emisión como minutos transcurridos desde las 00:00. Por
ejemplo, 90 representa las 01:30 y 1410 representa las 23:30.
Implementa duracionEmision(inicio, fin). Recibe dos valores entre 0 y 1439, que pueden ser números o textos
numéricos, y devuelve la duración como número de minutos.
Si el final es anterior al comienzo, la emisión termina al día siguiente. Si ambos valores coinciden, la duración es 0.
Ninguna emisión dura 24 horas o más.
Ejemplos de comportamiento

Comprueba también los casos particulares descritos en el enunciado. */

const duracionEmision = (inicio, fin) =>{
    let inicioN = Number(inicio);
    let finN = Number(fin);
    let duracion = 0;
    if(inicioN < finN ) duracion = finN - inicioN; 
    if(inicioN > finN ) duracion = (1440 - inicioN) + finN;
    return duracion; 
}
duracionEmision("600", "645"); // 45
duracionEmision("1410", "30"); // 60
duracionEmision(720, 720); // 0
console.log(duracionEmision("600", "645"));
console.log(duracionEmision("1410", "30"));
console.log(duracionEmision(720, 720));

/**Ejercicio 2 Montaje de una pieza de audio (RA2b, c; RA4b, d, e, g, i)
2,50 puntos
Para preparar un reportaje se reciben cortes de audio. entrada y salida indican los segundos del archivo original
donde empieza y termina el fragmento que interesa. Todos los valores son números no negativos y salida es
mayor o igual que entrada.
Implementa prepararMontaje(cortes). Debe devolver un objeto con exactamente dos propiedades: archivos, con
los nombres de los archivos no descartados en el orden recibido; y duracion, con los segundos que duraría el
montaje de esos fragmentos.
Los cortes descartados no forman parte de ninguno de los dos resultados. Un corte de duración cero sí conserva
su archivo en la lista. Si no hay cortes utilizables, devuelve { archivos: [], duracion: 0 }.

Ejemplos de comportamiento
prepararMontaje(cortes);
// {
// archivos: ["cabecera.wav", "entrevista.wav", "ambiente.wav"],
// duracion: 105
// }
Comprueba también los casos particulares descritos en el enunciado. */
const cortes = [
 { archivo: "cabecera.wav", entrada: 0, salida: 12,
 descartado: false },
 { archivo: "entrevista.wav", entrada: 20, salida: 95,
 descartado: false },
 { archivo: "prueba.wav", entrada: 0, salida: 40,
 descartado: true },
 { archivo: "ambiente.wav", entrada: 5, salida: 23,
 descartado: false }
];
const prepararMontaje = (cortes) =>{
   let cortesTrue = cortes.filter( valor => !valor.descartado);
    let total = {
        archivos: [],
        duracion:0
    };
   cortesTrue.forEach((cortes,index) => {
        total.archivos[index] = cortes.archivo;
        total.duracion += cortes.salida - cortes.entrada;
   });
   return total;
}

console.log(prepararMontaje(cortes));

/**Ejercicio 3 Reserva de un estudio (RA2b, c, e; RA4b, d, e, i)
2,00 puntos
Una reserva ocupa un estudio desde inicio hasta fin, expresados en minutos desde las 00:00. En este ejercicio
todos los intervalos están dentro del mismo día y su final es posterior a su inicio.
Implementa hayConflicto(reservas, estudio, inicio, fin). Devuelve true si la nueva reserva comparte algún tiempo
de uso con una reserva confirmada del mismo estudio. Devuelve false en cualquier otro caso.
Una reserva pendiente no bloquea el estudio. Una reserva puede comenzar exactamente cuándo termina otra,
sin que exista conflicto. Si no hay reservas, el resultado es false.

Ejemplos de comportamiento
hayConflicto(reservas, "A", 650, 670); // true
hayConflicto(reservas, "A", 660, 700); // false
hayConflicto(reservas, "A", 590, 790); // true
hayConflicto(reservas, "C", 600, 800); // false
Comprueba también los casos particulares descritos en el enunciado.
 */

const reservas = [
 { estudio: "A", inicio: 600, fin: 660, confirmada: true },
 { estudio: "B", inicio: 620, fin: 700, confirmada: true },
 { estudio: "A", inicio: 660, fin: 690, confirmada: false },
 { estudio: "A", inicio: 720, fin: 780, confirmada: true }
];

const hayConflicto = (reservas, estudio, inicio, fin) =>{
   let reservaCofirmada =  reservas.filter(res => res.confirmada);
   let conflito = false;
   reservaCofirmada.forEach(res =>{
        if(res.estudio == estudio){
            if(inicio >= res.inicio && inicio < res.fin) conflito = true;
            if(inicio < res.inicio && fin < res.fin) conflito = true;
        }
   })
    return conflito;
}
hayConflicto(reservas, "A", 650, 670); // true
hayConflicto(reservas, "A", 660, 700); // false
hayConflicto(reservas, "A", 590, 790); // true
hayConflicto(reservas, "C", 600, 800); // false

console.log(hayConflicto(reservas, "A", 650, 670))
console.log(hayConflicto(reservas, "A", 660, 700))
console.log(hayConflicto(reservas, "A", 590, 790))
console.log(hayConflicto(reservas, "C", 600, 800))
/**
 * Ejercicio 4 Comprobaciones antes del directo (RA2b, c, e; RA4b, d, e, i)
2,00 puntos
Antes de comenzar el directo se revisan requisitos técnicos. Cada requisito tiene un código único e indica si es
obligatorio. Las comprobaciones registran ese código y si la prueba se superó. Puede haber varios intentos para
un mismo código.
Implementa listoParaEmitir(requisitos, comprobaciones). Devuelve true únicamente cuando exista al menos un
requisito obligatorio y todos los obligatorios tengan alguna comprobación superada.
Un intento fallido no invalida otro superado del mismo requisito. Los requisitos opcionales no condicionan el
resultado. Si falta una comprobación superada de cualquier obligatorio, o no existe ningún requisito obligatorio,
devuelve false.


Ejemplos de comportamiento
listoParaEmitir(requisitos, comprobaciones); // true
listoParaEmitir(requisitos, [
 { codigo: "MIC", superada: true }
]); // false
listoParaEmitir([], comprobaciones); // false
Comprueba también los casos particulares descritos en el enunciado.
 */
const requisitos = [
 { codigo: "MIC", obligatorio: true },
 { codigo: "MESA", obligatorio: true },
 { codigo: "LUZ", obligatorio: false }
];
const comprobaciones = [
 { codigo: "MIC", superada: false },
 { codigo: "MESA", superada: true },
 { codigo: "MIC", superada: true }
];

const listoParaEmitir =(requisitos, comprobaciones)=>{
    let pas = false;
    requisitos.forEach(re => {
        if(res.obligatorio){
             pas = comprobaciones.find(con = con.superada);
        }
    })
    return pas;
};

/**
 * Ejercicio 5 Reprogramación de la escaleta (RA2b, c; RA4b, d, e, g, i)
2,00 puntos
La escaleta describe el orden de las intervenciones del programa. inicio se expresa en minutos desde las 00:00.
retraso es un número no negativo; se garantiza que los nuevos horarios permanecen dentro del mismo día.
Implementa reprogramar(escaleta, retraso). Debe devolver una nueva escaleta con la misma información general,
la versión incrementada en uno y únicamente las intervenciones que todavía no se hayan emitido, en el mismo
orden. El comienzo de cada una debe retrasarse los minutos indicados.
La escaleta original, su lista de intervenciones y sus objetos deben permanecer intactos. Conserva cualquier otra
propiedad que puedan contener. Cada intervención del resultado debe ser un objeto nuevo. Si todas se han
emitido, devuelve la nueva versión con intervenciones: [].
DWEC · 2.º DAW · EV1 · Prueba Evaluable JS Moderno
Radio Aurora | 4
const escaleta = {
 programa: "Voces del barrio",
 version: 2,
 intervenciones: [
 { codigo: "AP", inicio: 600, emitida: true },
 { codigo: "EN", inicio: 610, emitida: false },
 { codigo: "MU", inicio: 635, emitida: false }
 ]
};
Ejemplos de comportamiento
reprogramar(escaleta, 10);
// {
// programa: "Voces del barrio",
// version: 3,
// intervenciones: [
// { codigo: "EN", inicio: 620, emitida: false },
// { codigo: "MU", inicio: 645, emitida: false }
// ]
// }
Comprueba también los casos particulares descritos en el enunciado.

 */