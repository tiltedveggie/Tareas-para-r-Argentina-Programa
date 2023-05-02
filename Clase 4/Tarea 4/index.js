// Calcular el promedio de todos los números en un array de números
// (y ponerlo en una función), ej.: calcularPromedio([10,5,4,2,8])

function calculateAverage(array) {
	return (
		array.reduce(
			(previousValue, currentValue) => previousValue + currentValue
		) / array.length
	);
}

console.log(calculateAverage([1, 2, 3, 4, 5]));
