//Tarea 3:
// Preguntarle al usuario si tiene documento, y que conteste con "si" o "no".
// Si dice si, preguntarle la edad.
// Si la edad es mayor a 18, dejarlo entrar al bar.
// Si la edad es menor a 18, no dejarlo entrar al bar.
// Si no tiene documento, no dejarlo entrar al bar.
// Si no entendemos la respuesta, le decimos que no entendimos la respuesta.
// Punto bonus: SI, NO, Si, No, si, no.

const userHasID = prompt('Do you have your ID?').toLowerCase();

if (userHasID === 'yes') {
	const userAge = Number(prompt('What is your age?'));

	if (userAge >= 18) {
		document.write('You can enter to the bar.');
	} else {
		document.write('You cannot enter to the bar.');
	}
} else if (userHasID === 'no') {
	document.write('You cannot enter to the bar.');
} else {
	document.write('Sorry, I cannot understand your answer.');
}
