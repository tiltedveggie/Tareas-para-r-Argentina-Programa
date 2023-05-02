//TAREA: En otro archivo distinto,
// Crear una lista de <ol> y <li> que contengan sólo números.
// Convertir esos números a un array y:
// 1. calcular el promedio y mostrarlo en un <em> pre-creado con el texto "El promedio es..."
// 2. obtener el número más pequeño y mostrarlo en un <em> pre-creado con el texto "El número más pequeño es..."
// 3. obtener el número más grande y mostrarlo en un <em> pre-creado con el texto "El número más grande es..."
// 4. obtener el número que más se repite y mostrarlo en un <em> pre-creado con el texto "El número más frecuente es..."

const actionButton = document.getElementById('act-btn');
const resultsContainer = document.getElementById('results');

actionButton.onclick = function () {
	const elements = document.querySelectorAll('.number');
	const numbers = nodeListToArray(elements);

	const emElement = document.createElement('em');
	emElement.innerHTML =
		'The average is: ' +
		getAverage(numbers) +
		'<br>' +
		'The smaller number is: ' +
		getMin(numbers) +
		'<br>' +
		'The bigger number is: ' +
		getMax(numbers) +
		'<br>' +
		'The most frequent number is: ' +
		getMostFrequent(numbers);

	resultsContainer.appendChild(emElement);
};

function nodeListToArray(nodeList) {
	let array = [];

	nodeList.forEach(node => {
		array.push(Number(node.innerText));
	});

	return array;
}

function getAverage(array) {
	return Math.round(
		array.reduce((prevValue, currValue) => prevValue + currValue) / array.length
	);
}

function getMin(array) {
	return Math.min(...array);
}

function getMax(array) {
	return Math.max(...array);
}

function getMostFrequent(array) {
	let initialFrequency = 1;
	let repetition = 0;
	let mostFrequentNumber;

	for (let i = 0; i < array.length; i++) {
		for (let j = i; j < array.length; j++) {
			if (array[i] == array[j]) repetition++;

			if (initialFrequency < repetition) {
				initialFrequency = repetition;

				mostFrequentNumber = array[i];
			}
		}

		repetition = 0;
	}

	return mostFrequentNumber;
}
