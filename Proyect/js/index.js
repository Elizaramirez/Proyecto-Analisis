// selectores

// obtener un elemento por ID
document.getElementById("div5").innerHTML = "Este es el  DIV 5"

// obtener un Arreglo de elementos por su clase y guardarlos en una variable 

let divs = document.getElementsByClassName("col")

console.log("contenido del div en la pos 3" + divs[3].innerText)

for (let i = 0; i < divs.length; i++) {
    console.log("contenido del div en la pos 3" + i + " :" + divs[i].innerText)
    divs[i].style.backgroundColor = 'blue'
    divs[i].style.color = 'white'

}
//divs[7].innerHTML = divs[0].innerHTML

// obtener un arreglo de elementos por su tag name y guardarlo en una variable 
let tagh3 = document.getElementsByTagName("h3")

// obetener elemetos del DOM
document.querySelector(".col") // obtiene 1 solo (Incluso para clases )
document.querySelectorAll(".col") //obtiene el arreglo  de todos los elementos que cionciden con el selector

function cambiarColorColumnas(color) {
    let columnas = document.getElementsByClassName("col")
    for (let i = 0; i < columnas.length; i++) {
        columnas[i].style.backgroundColor = color
    }
}