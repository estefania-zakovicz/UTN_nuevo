

function cambiarColor (color) {

document.body.style.backgroundColor = color;
}

document.getElementById("cuadrado1").addEventListener("click", function() {
    cambiarColor("violet");
  });
  document.getElementById("cuadrado2").addEventListener("click", function() {
    cambiarColor("green");
  });
  document.getElementById("cuadrado3").addEventListener("click", function() {
    cambiarColor("red");
  });