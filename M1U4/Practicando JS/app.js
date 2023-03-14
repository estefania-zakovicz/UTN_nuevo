//tipos de datos
"Hello world" //string  o cadena de caracteres en español
'Hello world' //string se puede escribir con comillas simples y dobles


console.log('this is a string');

100000 //números: number
10.1
-2.3

true //estados: boolean
false

//array o arreglos, es una lista que puede ser de usuarios, de números, de datos booleanos
['joe','brian','marta']
[1, 2, 3]
[true, false, true, false]

//object: objeto. Por ej almacena datos de un usuario
'ryan'
70.4
14
true

// mediante estas llaves, estoy creando un usuario con una sola identidad, creando un objeto
//un objeto está corformado por pares clave y valor que puede ser de cualquier tamaño, es decir, se puede colocar todos los datos que se quieran en un usuario

{
    "username": 'ryan',
    "score": 70.4,
    "hours": 14,
    "proffesional": true
    "friends": ['ana', 'gonza', 'lore']

}


//VARIABLES: son nombres que le damos a ciertos tipos de datos que almacenamos si despues queremos utilizarlos
var nameuser = "john"; //variables pueden cambiar y la consola siempre va a mostrar el último cambio hecho
//una variable no puede empezar con un número, ni caracteres, excepto para el signo dolar y guión bajo

let lastname = "carter"; //lo mismo sucede con let
const PI = 3.14 //la constante es algo que no va a cambiar, es un valor único

//a veces las variables están escritas con algunas mayusculas y es solo por el hecho de que resultan maás fáciles de ser leídas. Por ejemplo: nombredepersona vs NombreDePersona
//esta manera de escribir estas variables con mayusculas, se la denomina Camelcase, porque parece la joroba de un camello en cada unicio de palabra
//otra manera de escribir variables es con guión bajo: por ej: user_name pero no es tan típica

// Hay 2 formas de escribir comentarios: una es con estas dos barras y la otra es mediante los siguientes signos:
/* el kladllddwc
dncjnddk
wihiwid
jnwwnd
*/

//Formas de operar diferentes tipos de datos:
//por ej numéricos mediante suma, resta, * y /
let numberOne = 60;
let numberTwo = 100;

let result = numberOne + numberTwo;

//por ej concatenación
let name = 'John';
let lastname = 'Carter';
let completeName = name + " " + lastname;
//esas comillas en blanco me permiten separar el nombre del apellido, sino se veria así: JohnCarter

//comparar datos o variables ej con ==, > o <, !=, >=, =<
let numberOne = 100;
let numberTwo = 500;
let result = numberOne > numberTwo;
//obtenemos en consola un booleano: true o false

let passwordDB = "pepe123"
let input = "jandjs"
let result = input == passwordDB;

//control de flujo: es la manera en que se comporta en base a los resultados. Por ej si la contraseña es incorrecta, la app va a mostrar un msj al usuario
if (result === true) {
    console.log ("Login Correcto")
//esto se lee de la siguiente manera: si el resultado es igual a true, ejecuta lo que coloco entre llaves
// eso se le conoce como bloque
}

if (result === false) {
    console.log ("Login Incorrecto")

}
//para comparar podemos usar dos o tres signos iguales, pero al usar 3, es como más fuerte. Buscar más detalles después
//también podemos escribir datos condicionales de otra menra, ya que solo tenemos 2 variables: true or false. Por ej

if (result === true) {
    console.log ("Login Correcto")}

 else {
    console-log ("Contraseña incorrecta");

    //esto se lee así: Si el resultado es true, muestrame el login correcto o incorrecto
 }                   

 //Los if no solo sirve para validar datos que tienen 2 estados. También podemos validar datos que tienen múltiples valores. Por ej

 let score = 70;

 if (score > 30) {
    console.log ("You need to practice more");
 } 
 
 if (score > 15) {
    console.log ("Estás mejorando");
 }
 
 else {
    console.log ("You nedd to follow this tutorial");
 } 
//es este caso, se mostrarían ambos mensajes por consola (tu necesitas paracticar ,as y estas mejorando)
/*pero si quiero que se muestre solo un mensaje tengo que usar
else if- Lo que se leería así: si el score es > a 30 muestrame esto por consola. Pero caso contrario,  si el score es < a 15, muestra lo otro*/

if (score > 30) {
    console.log ("You need to practice more");
 } 
 
 else if (score > 15) {
    console.log ("Estás mejorando");
 }
 
 else {
    console.log ("You nedd to follow this tutorial");

    /* Tambien etnemos otro control de flujo condicional llamado swicht
     */
    let typeCard = "Debit Card";
    switch (typeCard) { //esto se lee así: el tipo de tarj es débito. En caso de que sea de debito tira este msj
    case "Debit Card":
        console.log ("This is a debit card");
    break; //el comnado switch se usa junto a dos palabras más: case y break.
    case "Credit Card";
        console.log ("This is a credit card");
        break;

    default:
        console.log ("No card"); //si coloca un numero que no corresponde a ni un tipo de tarjeta, que tire ese msj

/*Bucles: por ej si yo quiero que el msj Hola Mundo se muestre
50 veces, usamos la variable while. Antes, la variable let.
Count sería contar. */

let count = 50;

while (count > 0) {
console.log ('Hello world'); //es decir, mientras el valor 50 sea mayor a 0, que ejecute el msj Hello world
count = count - 1 //y luego, cuando muestres ese msj, quiero que este conteo disminuya en 1 
    } //eso significa que si count vale 50, -1= queda en 49
    //luego todo estos códigos van a volver a ejecutarse desde el conteo 49-
/**lo que hace while es aplicar una condición, si la condición cumple va a 
 * ejecutar lo qye esta dentro de las llaves. También podemos 
 * escribir while de otra manera:
 */
let count = 1;
while (coutn <= 50) {
    console.log (count);
    count++; //el ++ significa que suma un valor más, no dos.
}
/** Un bucle es una tarea que se va a repetir y repetir y repetir.
 * las veces que querramos. Pero debemos tener en cuenta que lo 
 * podemos hacer de manera infinita y ese sería un error porque
 * el navegador se va a seguir ejecutando y nunca va a parar-
 * Como por ej en el siguiente ejemplo
*/ 
let count = 1;
while (true) {
    console.log (count);
    count++;
}

/**While es una opcion de escribir un itinerador. Pero tmb 
 * hay otras opciones: como el bucle for, el cual utiliza mucho
 * los arreglos
 */

let names = ['ryan', 'joe','john'];
console.log (names [0]) //esta es una manera de hacer arreglos, a través de corchetes []

//otra manera de arreglos es para saber la longitud de algo

let names = ['ryan', 'joe','john'];
console.log (names.length); //length es longitud


let names = ['ryan', 'joe','john'];
for (let i = 0; i < names.length){
//la variable i sería el índice, pero puede tener cualquier nombre. El for entre parentesis toma una serie de condiciones y nosotros tenemos que dársela
} // es decir, si 0 es menor a 3, ejecuta lo siguiente.

let names = ['ryan', 'joe','john'];
for (let i = 0; i < names.length; i++) {
/** estoy creando una variable i que empieza en 0. Luego le digo:
 * Mientras i sea menor a 3, empieza a ejecutar el código que está
 * entre llaves- Y cuando lo ejecutes, luego incrementa el valor
 * de i. ENtonces i vale 1. 1 es < a 3? sí- ejecuta el c+odigo, 
 * y vuelve a incrementar el valor.
 */
console.log (names [i]); //acá i, va a hacer que se muestre cada nombre, no siempre el mismo
}
//otra manera:

let names = ['ryan', 'joe','john'];
for (let i = names.length - 1; i >= 0; i--) {
    console.log (names[i]);
} 
//los bucles for son muy utilizados cuando trabajamos con listas como string, booleanos, etc


function greeting () { //greeting es saludar. Quiero que realice la funcion de saludar
//la palabra clave es función con el nombre
console.log ("Hello");
} 

greeting (); //la funcion empieza a ejecutar lo de consola cuando agregamos de nuevo el greeting abajo
//esto me permite reutilar la función nuevamente. Dentro de una funcion tmb puedo poner var o let. Entonces function tiene el objetivo de poder reutilizar funciones


//Parámetro: 

function greeting (name){
    console.log (name)
    console.log ("Hello");

} 
greeting ('María'); //estoy pasando este string, dentro de la funcion a traves de esta variable name
//le estoy dando un valor adentro de la funcion

function greeting (personName){
    console.log ("Hello  + personName");

} 
greeting ('María');
greeting ('Lucas');
greeting ('Estefi'); //estoy reutilizando códigos

/**Esto no solo sirve para mensajes, sin tmb puedo usar para sumar
 * 
 */

function add (n1, n2){
    console.log (n1, n2);
}
add (3, 2); //aqui muestra solo los numero sin sumar. si quiero que sume, hago  lo sgte:


function add (n1, n2){
    console.log (n1 + n2); //la tarea siempre es la misma, pero si reutilizo y pongo un n1 y n2 diferente, ejecuta otro resultado

}
add (3, 2);
add (100 + 300);
add (5 + kskdjo); //acá va a concatenar, es decir, muestra el numero mas las letras qeue stán al lado


dineroCofla = prompt("cuanto dinero tienes cofla?"); //prompt almacena ese dato que va a colocarse cuando se ejecuta en pagina

if (dineroCofla >= 0.6 && dineroCofla < 1) {
    alert("cofla; comprate el helado de agua");
}

else if (dineroCofla >= 1 && dineroCofla < 1.6) {
    alert("cofla; comprate el helado de crema");
}
else if (dineroCofla >= 1.6 && dineroCofla < 1.7) {
    alert("cofla; comprate el helado con confites");

}
else {
    alert("lo siento, no te alcanza para nada");
}



