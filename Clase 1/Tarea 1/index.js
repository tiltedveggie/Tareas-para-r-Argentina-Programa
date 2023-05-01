//  Crear una función que tome como parámetro el año actual y el año de nacimiento
//  y que calcule la edad del usuario (aproximadamente).

//  Preguntarle estos datos al usuario y guardarlos en 2 variables.

//  Ejecutar la función con estos datos.

//  Imprimir el resultado en la consola.

//  ---------------------------------------------------------------

let userCurrentYear = prompt('What year is it?');
let userBirthYear = prompt('What year were you born?');

function calculateAge(currentYear, birthYear) {
	let userAge = currentYear - birthYear;

	console.log('Your age is' + ' ' + userAge);
}

calculateAge(userCurrentYear, userBirthYear);
