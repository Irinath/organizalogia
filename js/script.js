let current = 0;
const images = document.querySelectorAll('.carrousel-image');
const total = images.length;

function showNextImage() {
    images[current].classList.remove('active');
    current = (current + 1) % total;
    images[current].classList.add('active');
}

// Cambia cada 5 segundos (5000 ms)
setInterval(showNextImage, 5000);


//Función para agregar un prducto.

function agregarProducto(producto){
    console.log(producto + " fue agregado al carrito");
}


//Función para calcular el precio total.
function calcularTotal(productos){
    let total = productos.reduce((sum, producto) => sum + producto.precio, 0);
    console.log(`El total es $ ${total.toFixed(2)}`);
    return total;
}

//Módulo Carrito de Compras.
const carrito = (function () {
    let productos = [];

    return {
        agregar: function(producto){
            productos.push(producto);
            agregarProducto(producto.nombre);
        },

        total: function() {
            return calcularTotal(productos);
        }
    };
}) ();
