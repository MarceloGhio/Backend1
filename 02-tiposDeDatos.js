/*-----------TIPO DE DATOS--------------*/

/*----------------PRIMITIVOS-------------*/

const string1 = "hola soy un string";
const number1 = 6;
const boolean1 = true;
const null1 = null;
const undef = undefined;

console.log("variable sting1 ---->" , typeof string1);
console.log(typeof number1);

/*---------------OBJETO------------------*/

// predefinido como new date de javascript, constructor de fechas, devuelve hora y fecha actuales x ej
console.log(new Date());
/*-----------------------------------*/
function hola(name) {
    console.log(`Hola ${name}`);
}
hola('Juan');
/*---------------*/
const holaArrow = (name) => {
    console.log(`Hola ${name}`);
}
holaArrow('Andres')
/*------------------*/
// La funcion que esta dentro de una clase de denomina metodo
class ClaseEjemplo {
    constructor(){}

    saludar(name){
        console.log(`Hola ${name}`);
    }
}

const instanciaClase = new ClaseEjemplo();
instanciaClase.saludar('Humberto');
/*------------------------------------------------- */
const array = ["Hola", 1, true, undefined];

const arrayObj = [{name: "Juan", age: 45}, {name: "Carlos", age: 20}];

console.log(arrayObj[0]);
/*----------------------------------*/
console.log(process.cwd())
// me devuelve el directorio del archivo que estoy ejecutando