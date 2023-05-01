// Tarea 1:
// Preguntarle al usuario su nombre.
// Si el nombre del usuario es el mismo que  el  de ustedes
// Imprimir "Hola, Tocayo! Yo también me llamo " y su nombre.
// Elijan otro nombre, puede ser de un pariente, amigo, conocido.
// Si el nombe del usuario es el mismo que el que nombre que eligieron
// Imprimir "Hola " y el nombre, " te llamás igual que mi ..."
// Si no, simplemente imprimir "Hola " + nombre!

const userName = prompt('What is your name?');
const devName = 'Kevin';
const userFriendName = 'Carlos';

if (userName === devName) {
	document.write('Hello, namesake! My name is also ' + userName + '!');
} else if (userName === userFriendName) {
	document.write(
		'Hello, ' + userName + '! Your name is the same as my friend!'
	);
} else {
	document.write('Hello, ' + userName + '!');
}
