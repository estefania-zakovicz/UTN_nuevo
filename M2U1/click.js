function CambiarColor (color) {  //función para cambiar el color del fondo
    document.style.body.backgroundColor = color;
}

//eventos que tengo que añadir en cada cuadrado

document.getElementById("cuadrado1").addEventListener("click", function() {
    CambiarColor("red");})

document.getElementById("cuadrado2").addEventListener("click", function() {
    CambiarColor("violet");})

document.getElementById("cuadrado3").addEventListener("click", function() {
    CambiarColor("yellow");})