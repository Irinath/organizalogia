async function asyncLoadProduct() {
    try {
        //conexión con la base de datos
        const response = await fetch("https://fakestoreapi.com/products")
        
        //recibir la respuesta y convertirla a formato json
        const data = await response.json();
        //vemos la respuesta recibida (no es necesario)
        console.log(data);

        //iteramos el listado de producto para que lo incluya en nuestro contenedor
        //Guardamos los datos de cada producto en una card
        data.forEach(producto => {
                contenedor.Productos.innerHTML += `
                <div class = "card">

                `;
                //Comando que inserta todos los productos/cards en la sección "sección__productos" del HTML.
                seccionProductos.append(contenedorProductos);
            });

            /* method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                title: "Apple Vision Pro",
                brand: "Apple",
                model: "Apple vision pro First Gen",
                color: "Black",
                category: "appliances",
                discount: 1
            })*/

        
    } catch (error) {
        console.log("Error al obtener productos: ", error);
    }
}

document.addEventListener("DOMContentLoaded", asyncLoadProduct);

