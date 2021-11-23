const imagenMostrada = document.querySelector(".imagenMostradaBici")
const imagenMostrada2 = document.querySelector(".imagenMostradaBici2")
const imagenMostrada3 = document.querySelector(".imagenMostradaBici3")
const imagenMostrada4 = document.querySelector(".imagenMostradaBici4")
const imagenMostrada5 = document.querySelector(".imagenMostradaBici5")
const imagenMostrada6 = document.querySelector(".imagenMostradaBici6")
const imagenMostrada7 = document.querySelector(".imagenMostradaCasco")
const imagenMostrada8 = document.querySelector(".imagenMostradaCasco2")
const colores = document.querySelectorAll(".coloresJs");
const rodados = document.querySelectorAll(".rodado")
const cards = document.querySelectorAll(".card")
let id;
let rodadoSelecionado;
var totalPago = 0;
const carrito = [];
let botonesPrecio = document.querySelectorAll(".precio")
const articulos = ["Specialized", "Bici2", "Bici3", "Bici4", "Bici5"];
const promociones = ["PromoBasica", "PromoBiciteka", "PromoPremiun"]
const valoresPromociones = [75000, 120000, 250000]
let articuloSeleccionado;
const carritoAcumuladora = document.querySelector("#carritoAcumuladora")
const overlay = document.querySelector('#overlay');
let acumuladoraSeleccionado;
var pagar;
var cuenta1;
var vuelto;

const abrirModal = () => {
    overlay.classList.remove('hidden');
    //body.classList.add('no-scroll')
};

const cerrarModal = () => {
    overlay.classList.add('hidden');
    for (let dialogo of ventanasDeDialogo) {
        dialogo.classList.add('hidden');
    }
};

const cambioDeImagen = (id) => {
    switch (id) {
        case "roja":
            imagenMostrada.setAttribute("src", `./images/${id}.png`)
            break;
        case "amarilla":
            imagenMostrada.setAttribute("src", `./images/${id}.png`)
            break;
        case "verde":
            imagenMostrada.setAttribute("src", `./images/${id}.png`)
            break;
        case "naranja":
            imagenMostrada2.setAttribute("src", `./images/${id}.png`)
            break;
        case "blanca":
            imagenMostrada2.setAttribute("src", `./images/${id}.png`)
            break;
        case "celeste":
            imagenMostrada2.setAttribute("src", `./images/${id}.png`)
            break;
        case "azul":
            imagenMostrada3.setAttribute("src", `./images/${id}.png`)
            break;
        case "fluor":
            imagenMostrada3.setAttribute("src", `./images/${id}.png`)
            break;
        case "gris":
            imagenMostrada3.setAttribute("src", `./images/${id}.png`)
            break;
        case "marron":
            imagenMostrada4.setAttribute("src", `./images/${id}.png`)
            break;
        case "cyan":
            imagenMostrada4.setAttribute("src", `./images/${id}.png`)
            break;
        case "bordo":
            imagenMostrada4.setAttribute("src", `./images/${id}.png`)
            break;
        case "amarillita":
            imagenMostrada5.setAttribute("src", `./images/${id}.png`)
            break;
        case "grisesita":
            imagenMostrada5.setAttribute("src", `./images/${id}.png`)
            break;
        case "blanquita":
            imagenMostrada5.setAttribute("src", `./images/${id}.png`)
            break;
        case "negra":
            imagenMostrada6.setAttribute("src", `./images/${id}.png`)
            break;
        case "rosa":
            imagenMostrada6.setAttribute("src", `./images/${id}.png`)
            break;
        case "manzana":
            imagenMostrada6.setAttribute("src", `./images/${id}.png`)
            break;
        case "casco1":
            imagenMostrada7.setAttribute("src", `./images/${id}.png`)
            break;
        case "casco2":
            imagenMostrada7.setAttribute("src", `./images/${id}.png`)
            break;
        case "casco3":
            imagenMostrada7.setAttribute("src", `./images/${id}.png`)
            break;
        case "casco4":
            imagenMostrada8.setAttribute("src", `./images/${id}.png`)
            break;
        case "casco5":
            imagenMostrada8.setAttribute("src", `./images/${id}.png`)
            break;
        case "casco6":
            imagenMostrada8.setAttribute("src", `./images/${id}.png`)
            break;
        default:
            break;
    }
}


colores.forEach(color => {
    color.addEventListener("click", () => {
        id = color.getAttribute("id")
        cambioDeImagen(id)
    })
})

const eliminarActive = () => {
    rodados.forEach(rodado => {
        rodado.classList.remove("active")
        rodadoSelecionado = ""
    })
}

rodados.forEach(rodado => {
    rodado.addEventListener("click", () => {
        eliminarActive()
        rodado.classList.add("active")
    })
})

function acumularCarrito() {
    acumuladoraSeleccionado = carrito.length
    carritoAcumuladora.innerHTML = `<p>${acumuladoraSeleccionado}</p>`
    console.log(acumuladoraSeleccionado)
}

botonesPrecio.forEach((botonPrecio) =>
    botonPrecio.onclick = () => {
        totalPago += parseInt(botonPrecio.dataset.precio)
        articuloSeleccionado = botonPrecio.dataset.producto
        carrito.push(articuloSeleccionado)
        console.log(carrito)
        acumularCarrito()
        eliminarActive()
    }
);

// botonesAdquirirPromo.forEach((botonAdquirirPromo)=>
// botonAdquirirPromo.onclick = () => {
// totalPago += parseInt(botonAdquirirPromo.dataset.valor)
// carrito.push(botonAdquirirPromo)    
// console.log(carrito) 
// }
// );   
//  



function vaciarCarrito() {
    totalPago = 0
    carrito = [];
}

function carritoCompra() {
    if (totalPago === 0) {
        alert("compra algo raton")
    } else {
        alert("Compraste estos articulos: " + "\n" + carrito + " tenes que pagar $ " + totalPago)
        pagar = parseInt(prompt("¿Con cuento va pagar ?"))
        if (pagar > totalPago) {
            vuelto = pagar - totalPago;
            alert("Muchas gracias por su compra ;)\n Su vuelto es $ " + vuelto)
            vaciarCarrito()
        }
        else if (totalPago > pagar) {
            cuenta1 = (totalPago - pagar);
            alert("Te faltan $" + cuenta1)
            carritoCompra()
        }
        else {
            alert("Muchas gracias por su compra ;)")
            vaciarCarrito()
        }
    }
    console.log(carrito)
}