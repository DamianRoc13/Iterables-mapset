`use strict`;

// 5.6 Iterables
// Array.from

let fruits = {
  0: "Uva",
  1: "Manzana",
  2: "Fresa",
  length: 3,
};

let arrFruits = Array.from(fruits);
alert(arrFruits.pop());

/* De esta manera podemos llamar y usar metodos de un array */

//5.7 Map y Set

let data = new Map();

data.set("name", "Damian");
data.set(20, "age");
data.set(true, "atudent");

alert(data.get("name"));
alert(data.size);

/*es una coleccion de datos identificados por claves y podemos tener claves de cualquier tipo.
 */

//5.9 Object.keys, values, entries

let estudiantes = {
  name: "Damian",
  lastName: "Olivo",
  age: 20,
};

alert(Object.keys(estudiantes));
alert(Object.values(estudiantes));
alert(Object.entries(estudiantes));

/*Estos metodos nos devuelven arrays.
    Object.keys(obj) – devuelve un array de propiedades.
    Object.values(obj) – devuelve un array de valores.
    Object.entries(obj) – devuelve un array de pares [propiedad, valor].
 */

//5.10 Asignacion desestructurante

let ages = [19, 20, 17, 18];

let [alexAge, damianAge] = ages;

alert(alexAge);
alert(damianAge);

/*Partiendo un array podemos trabajar con variables en lugar de elementos de un array.
en el caso de no asignar cada elemento de un array a una variable, el resto de elemetos son omitidos.
*/

//5.11 Fecha y Hora

let today = new Date();
alert(today);

let lastYear = new Date("2023-12-25");
alert(lastYear);

/*Para crear un objeto Date se lo instancia con new Date.
si no le introducimos parametros nos devolvera la fecha y hora actual.
En caso de pasarle un unico argumento de tipo string, se convierte a fecha automaticamente*/

//5.12 Metodos JSON, toJSON

let user = {
  name: "John",
  age: 30,
  isAdmin: false,
  courses: ["html", "css", "js"],
  spouse: null,
};

let json = JSON.stringify(user);

alert(typeof json); // ¡obtenemos un string!

alert(json);

/*JSON(Notacion de Objeto Javascript) es un formato general para 
representar valores y objetos.

JavaScript proporciona métodos:

    JSON.stringify para convertir objetos a JSON.
    JSON.parse para convertir JSON de vuelta a un objeto.

 */
