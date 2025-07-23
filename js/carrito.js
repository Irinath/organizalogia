
document.addEventListener('DOMContentLoaded', function () {
    cargarCarrito();
});

// Botón Agregar producto al carrito
var botonesAgregar =
    document.getElementsByClassName('agregar-carrito');
for (var i = 0; i < botonesAgregar.length; i++) {
    botonesAgregar[i].addEventListener('click', agregarProducto);
}

// Vaciar carrito
document.getElementById('vaciar-carrito').addEventListener('click',
    function () {
        localStorage.removeItem('carrito');
        cargarCarrito();
    });

//función agregar al carrito
function agregarProducto(event) {
    var producto = {
        id: event.target.getAttribute('data-id'),
        nombre: event.target.getAttribute('data-nombre'),
        precio: event.target.getAttribute('data-precio')
    };

    var carrito = JSON.parse(localStorage.getItem('carrito')) || [];
    carrito.push(producto);
    localStorage.setItem('carrito', JSON.stringify(carrito));
    cargarCarrito();


}

function cargarCarrito() {
    var listaCarrito = document.getElementById('lista-carrito');
    listaCarrito.innerHTML = '';

    var carrito = JSON.parse(localStorage.getItem('carrito')) || [];

    for (var i = 0; i < carrito.length; i++) {
        var producto = carrito[i]; var li = document.createElement('li');
        li.textContent = producto.nombre + ' - $' + producto.precio;
        listaCarrito.appendChild(li);
    }
}

function actualizarCarrito() {
    const carrito = JSON.parse(localStorage.getItem("carrito")) || [];
    const carritoCounter =
        document.getElementById("cart-counter");
    carritoCounter.textContent = carrito.length;
}

document.addEventListener("DOMContentLoaded", () => {
    fetch("https://fakestoreapi.com/products")
        .then((response) => response.json())
        .then((data) => {
            const contenedor =
                document.getElementById("productos__container");
            data.forEach((producto) => {
                contenedor.innerHTML += `
                        <div class="card">
                            <img src="${producto.image}" alt="${producto.title}">
                            <h3>${producto.title}</h3>
                            <p>Precio: $${producto.price}</p>
                            <button onclick="agregarAlCarrito(${producto.id})">Añadir al carrito</button>
                        </div>`;
            });

            actualizarCarrito();
        })

        .catch((error) => {
            console.error("Error al obtener productos:", error);
            contenedor.innerHTML = "<p>Hubo un problema al cargar los productos.</p>";
        });
});

function agregarAlCarrito(idProducto) {
    let carrito = JSON.parse(localStorage.getItem("carrito")) || [];
    carrito.push(idProducto);
    localStorage.setItem("carrito", JSON.stringify(carrito));
    alert("Producto añadido al carrito");
    actualizarCarrito();
    cargarCarrito();
}