let edad = prompt("ingrese la edad");
edad = parseInt(edad);
let esVip = true;

if (edad >= 18 && esVip) {
    console.log("Ingresa al salón VIP");
} else if (edad >= 18) {
    console.log("Ingresa al salón común");
} else { console.log("No puede ingresar"); }

//Filtrar productos con descuento
let productos = [
    {
        "id": "AA001",
        "ISBN": 9789878220062,
        "name": "Hábitos átomicos",
        "autor": "CLEAR, JAMES",
        "price": 27900.00,
        "description": "UN METODO SENCILLO Y COMPROBADO PARA DESARROLLAR BUENOS HABITOS Y ELIMINAR LOS MALOS.",
        "image": "./image/products/atomics_habits.jpg",
        "discount": true
    },
    {
        "id": "AA002",
        "ISBN": 9789507883774,
        "name": "IKIGAI",
        "autor": "Hector Garcia / Francesc Miralles",
        "price": 28500.00,
        "description": "Según los japoneses, todo el mundo tiene un ikigai, un motivo para existir.",
        "image": "./images/products/IKIGAI-1024-1024.jpg",
        "discount": false
    },
    {
        "id": "AA003",
        "ISBN": 9789507883774,
        "name": "Los 7 Hábitos de la Gente Altamente Efectiva",
        "autor": "Covey, Stephen R.",
        "price": 28900.00,
        "description": "Los 7 hábitos de la gente altamente efectiva para dar vida a una nueva generación de líderes.",
        "image": "./images/products/7Habitos-1024-1024.jpg",
        "discount": true
    },
    {
        "id": "AA004",
        "ISBN": 9786287578012,
        "name": "Enfócate",
        "autor": "Newport, Cal",
        "price": 27100.00,
        "description": "El libro guía al lector a conseguir la concentración en tareas exigentes de la vida diaria y el trabajo.",
        "image": "./images/products/enfocate.jpg",
        "discount": false
    },
    {
        "id": "AA005",
        "ISBN": 9780698161863,
        "name": "Getting Things Done: The Art of Stress-Free Productivity",
        "autor": "Allen, David",
        "price": 29700.00,
        "description": "Un sistema de productividad revolucionario que te enseña como gestionar efectivamente y sin estrés proyectos, tareas y compromisos",
        "image": "./images/products/gtd.jpg",
        "discount": false
    }
]

let contadorCD = 0;
let contadorSD = 0;

for (let i = 0; i < productos.length; i++) {
    if (productos[i].discount) {
        console.log(productos[i].name + ", tiene descuento.");
        contadorCD++;
    } else {
        console.log(productos[i].name + ", no tiene descuento.");
        contadorSD++;
    }
}

console.log(`Hay ${contadorCD} libros con descuento`);
console.log(`Hay ${contadorSD} libros sin descuento`);

//Calcular y agregar el IVA a un producto
const iva21 = 0.21;
const iva105 = 0.105;
const iva27 = 0.27;

let precioBruto = prompt("Ingrese el precio sin IVA");
precioBruto = parseFloat (precioBruto);

let precioFinal = 0;

let iva = prompt("Seleccione el tipo de IVA: 1 al 21%, 2 al 10,5%, 3 al 27% ");
iva = parseInt (iva);

switch (iva){

    case 1: 
        precioFinal = parseFloat(((precioBruto * iva21) + precioBruto),2);
        console.log("El producto tiene 21% de IVA");
        break;
    case 2: 
        precioFinal = parseFloat(((precioBruto * iva105) + precioBruto),2);
        console.log("El producto tiene 10,5% de IVA");
        break;
    case 3: 
        precioFinal = parseFloat(((precioBruto * iva27) + precioBruto),2);
        console.log("El producto tiene 27% de IVA");
        break;
    default:
        console.log("Valor incorrecto");

}

console.log(`El precio final es $ ${precioFinal.toFixed(2)} `);