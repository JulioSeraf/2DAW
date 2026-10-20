const producto = {
    nombre: "Monitor",
    precio: 200,
    stock: 3,
    descuento: 20
};

const obtenerEstado = (producto) => producto.stock ? "Disponible" : "Agotado";

const obtenerPrecioFinal = (producto) => {
    return producto.descuento == null ? producto.precio : producto.precio - (producto.precio * (producto.descuento / 100));
}
 
const mostrarResultado = (producto, precio) => {
    console.log(`
        ================= Producto ======================
        ============== Name: ${producto} ==================
        ============== Precio: ${precio} =================
        `)
};

mostrarResultado(producto.nombre, obtenerPrecioFinal(producto));


//const precio = [3,5,7,8,9];
/*const total = precio.reduce((con, precio)=>{
    return con + precio;
},0);
console.log(total);

const alumnos = [{
 nombre: "Ana", nota:7   
},{
 nombre: "Luis", nota:5   
},{
 nombre: "Eva", nota:9  
},{
 nombre: "Pablo", nota:3   
}];

const tot = alumnos.reduce((acum, valor)=> acum + valor.nota,0);

console.log(tot/alumnos.length)

(const {nombre,nota} = alumnos[0];



const prod = {
    id: 4,
    nombre: "Webcam",
    precio:55,
    stock:2
};

const {nombre, precio} = prod;

console.log(`${nombre} cuesta ${precio}`)*/
