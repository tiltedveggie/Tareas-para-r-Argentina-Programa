//TAREA: En otro archivo distinto,
// Por cada clase de r/argentina programa existente, vamos a pedir:
// horas, minutos y segundos de cada video. Ej. Si un video dura
// 2 horas, 38 minutos y 20 segundos, vamos a rellenar 3 campos de texto con
// cada dato.
// al apretar el botón "Calcular tiempo total", debe mostrar en un
// <strong> pre-creado el tiempo total de los videos.

const hoursInputs = document.querySelectorAll('.hours');
const minsInputs = document.querySelectorAll('.mins');
const secsInputs = document.querySelectorAll('.secs');

const actionButton = document.getElementById('action-btn');

let infoContainer = document.getElementById('result-cont');

actionButton.onclick = function () {
	let hours = getHours(hoursInputs);
	let mins = getMins(minsInputs);
	let secs = getSecs(secsInputs);

	while (secs >= 60) {
		secs -= 60;
		mins++;
	}

	while (mins >= 60) {
		mins -= 60;
		hours++;
	}

	const strngElement = document.createElement('strong');
	strngElement.innerHTML =
		'Total videos duration: ' +
		hours +
		' Hours, ' +
		mins +
		' Mins, ' +
		secs +
		' Secs';

	infoContainer.appendChild(strngElement);
};

function getHours(inputs) {
	let hours = 0;

	for (let i = 0; i < inputs.length; i++) {
		hours += Number(inputs[i].value);
	}

	return hours;
}

function getMins(inputs) {
	let mins = 0;

	for (let i = 0; i < inputs.length; i++) {
		mins += Number(inputs[i].value);
	}

	return mins;
}

function getSecs(inputs) {
	let secs = 0;

	for (let i = 0; i < inputs.length; i++) {
		secs += Number(inputs[i].value);
	}

	return secs;
}
