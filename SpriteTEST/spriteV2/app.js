//NAVBAR

let menuToggle = document.querySelector('.menuToggle')
let navigation = document.querySelector('.navigation')

menuToggle.onclick = function(){
    menuToggle.classList.toggle('active')
    navigation.classList.toggle('active')
}





//CARDS
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
        let id = color.getAttribute("id")
        cambioDeImagen(id)
    })
})
const eliminarActive = () => {
    rodados.forEach(rodado => {
        rodado.classList.remove("active")
    })
}
rodados.forEach(rodado => {
    rodado.addEventListener("click", () => {
        eliminarActive()
        rodado.classList.add("active")
    })
})