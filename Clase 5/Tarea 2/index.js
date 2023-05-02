//TAREA: En otro archivo html (no Index) y otro archivo js (no tarea-clase-5.js),
// creá un formulario que capture el primer nombre, segundo nombre, apellido/s y edad
// del usuario también vamos a crear un <h1> que diga Bienvenido!
// vas a crear un botón de acción que una vez que lo apretás, va a
// mostrar toda la información junta en un campo de texto
// Y va a cambiar el <h1> para decir "Bienvenido, nombreDeUsuario"!

let h1Element = document.getElementById('welcomeH1');

const nameInput = document.getElementById('name');
const secondNameInput = document.getElementById('second-name');
const lastnameInput = document.getElementById('lastname');
const ageInput = document.getElementById('age');

const actionButton = document.getElementById('action-btn');

const infoContainer = document.getElementById('info-cont');

actionButton.onclick = function (e) {
	e.preventDefault();

	h1Element.innerHTML = 'Bienvenido, ' + nameInput.value + '!';

	infoContainer.innerHTML =
		nameInput.value +
		secondNameInput.value +
		lastnameInput.value +
		ageInput.value;
};
