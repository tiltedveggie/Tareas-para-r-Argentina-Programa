//	Preguntar el salario anual y calcular el salario mensual
//	Preguntar el salario mensual y calcular el anual
//	diario... semanal, por hora. etc.

//  ---------------------------------------------------------------

const userMonthlySalary = Number(prompt('What is your monthly salary?'));
const userAnnualSalary = Number(prompt('What is your annual salary?'));

function calcAnnualSalary(monthlySalary) {
	return Math.round(monthlySalary * 12);
}

function calcMonthlySalary(annualSalary) {
	return Math.round(annualSalary / 12);
}

function calcWeeklyPay(monthlySalary) {
	return Math.round((monthlySalary * 12) / 52);
}

function calcDailyPay(annualSalary) {
	return Math.round(annualSalary / 365);
}

console.log('Your annual salary is: $' + calcAnnualSalary(userMonthlySalary));
console.log('Your monthly salary is: $' + calcMonthlySalary(userAnnualSalary));
console.log('Your weekly pay is: $' + calcWeeklyPay(userMonthlySalary));
console.log('Your daily pay is: $' + calcDailyPay(userAnnualSalary));
