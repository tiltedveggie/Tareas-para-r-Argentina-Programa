//TAREA: completar tareas/clase-5/index.html para que incluya tarea-clase-5.js
//TAREA: crear un formulario donde un usuario pueda ingresar su salario anual.
//cuando el usuario haga click en el botón "calcular", mostrar el salario mensual
//en una caja de texto deshabilitada. --> <input type="text" disabled id="salario-mensual"/>

const annualSalaryInput = document.getElementById('annual-salary');
const monthlySalaryInput = document.getElementById('monthly-salary');
const calculateButton = document.getElementById('calculate-btn');

function calculateMonthlySalary(annualSalary) {
	return annualSalary / 12;
}

calculateButton.onclick = function (e) {
	e.preventDefault();

	monthlySalaryInput.value =
		'You monthly salary is: ' + calculateMonthlySalary(annualSalaryInput.value);
};
