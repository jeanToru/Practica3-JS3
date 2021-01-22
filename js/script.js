/**
 * Ejercicio #3:
 * Usando querySelector y querySelectorAll
 *
 * ¿Que voy a evaluar?
 * 1. Que funcione
 * 2. Buenas practicas
 *
 * NOTA: no se puede modificar el codigo HTML de la pagina
 */

/*
  EJERCICIO A: ----------------------------------------------------------
  
  Selecciona y loguea con console.log el <h3> que dice "Esto
  es una lista"
*/

const lista = document.querySelector('h3');
console.log(lista);

/*
  EJERCICIO B: ----------------------------------------------------------
  
  Selecciona y loguea con console.log el primer y el ultimo elemento
  de la lista
*/
const items = document.querySelectorAll('li');
console.log(items[0].textContent, items[3].textContent);

/*
  EJERCICIO C: ----------------------------------------------------------
  
  Selecciona y loguea con console.log el input de tipo "email" del
  formulario
*/

const email = document.getElementsByTagName('input');
console.log(email[2]);

/*
  EJERCICIO D: ----------------------------------------------------------
  
  Selecciona y loguea con console.log la fila de la tabla que tiene "JavaScript"
*/

const javaScript = document.querySelectorAll('tr');
console.log(javaScript[2].textContent);

/*
  EJERCICIO E: ----------------------------------------------------------
  
  Selecciona y loguea con console.log la celda que dice CSS
  
*/

const itemCss =  document.getElementsByTagName('td');
console.log(itemCss[4].textContent);

/*
  EJERCICIO F: ----------------------------------------------------------
  
  Investiga un metodo de algun elemento y trae un ejemplo de
  para que lo usarias
*/
