//Tarea 2:
// Preguntar la edad del usuario
// Hacerle saber si tiene más, menos ó la misma edad que nosotros.

const userAge = Number(prompt('What is your age?'));
const devAge = 19;

if (userAge > devAge) {
	document.write('You are older than me!');
} else if (userAge === devAge) {
	document.write('We are the same age!');
} else {
	document.write('You are younger than me!');
}
