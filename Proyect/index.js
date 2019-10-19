//Selectores

// Obtener el elemento por id
document.getElementById("div5").innerHTML = "Este es el div5"

//obtener arreglo de elementos por su clase
let divs = document.getElementsByClassName("col")

for (let i = 0; i < divs.length; i++) {
    console.log("contenido del div 3= " + i + ":" + divs[i].innerText)
    divs[i].style.backgroundColor = 'blue'
}
//divs[7].innerHTML = divs[0].innerHTML

//obtener arreglo de elemento por tag
let tagh3 = document.getElementsByTagName("h3")

//obtener un arreglo de elementos
document.querySelector(".col") //obtener 1 solo
document.querySelectorAll(".col") //obtener el arreglo


//cambiar el atributo src
document.getElementById("miimagen").src = "https://staticuestudio.blob.core.windows.net/buhomag/2016/10/03130422/wwf.jpg"

function cambiarcolorcolumnas(color) {
    let columnas = document.getElementsByClassName("col")
    for (let i = 0; i < columnas.length; i++) {
        columnas[i].style.backgroundColor = color
    }
}


function onclickBTN8() {
    console.log("Hizo click en el DIV 8")
}
document.getElementById("cambiar color8").addEventListener("click", onclickBTN8)

let div7 = document.getElementById("cambiarColor7")
div7.addEventListener("click", function() {
    console.log("Agregue una funcion anonima")
    console.log("Click en el Div7")


})