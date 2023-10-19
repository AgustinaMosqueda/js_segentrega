let ropa1 = {
    producto: "remera",
    precio: 2000,
    talle: 3,
};

let ropa2 = {
    producto: "pollera",
    precio: 3000,
    talle:2,
};

let ropa3 = {
    producto: "buzo",
    precio: 5000,
    talle: 3,
};

let productos= [ropa1,ropa2,ropa3];

function visualProducto(){
    let mostrar = "Tres productos disponibles:\n";
    productos.forEach( (ropa, index) =>{
        mostrar += `${index +1}. ${ropa.producto} - $${ropa.precio}\n`;
    });
    alert(mostrar);
}

function filtrarPorCategoria(categoria){
    return productos.filter(producto => producto.talle.toLowerCase()=== categoria);
}

function buscarProducto(producto){
    return producto.find(producto => producto.nombre.toLowerCase()=== producto.toLowerCase());
}

visualProducto();

let tipoDeProducto= prompt ("¿Qué producto quiere?");
let tipoFiltrados= filtrarPorCategoria (tipoDeProducto);

if ( tipoFiltrados.length > 0){
    let mensaje =` productos en la categoría $ {tipoDeProducto}:\n`;
    tipoFiltrados.forEach(producto =>{
        mensaje += `${producto.producto} - $${producto.precio}\n`;
    });
    alert(mensaje);
} else {
    alert (`No existe preoducto ${tipoDeProducto}`);
}