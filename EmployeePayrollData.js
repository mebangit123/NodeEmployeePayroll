class EmployeePayrollData
{
	salary;
	gender;
	startDate;

	constructor(...params)
	{
		this.id = params[0];
		this.name = params[1];
		this.salary = params[2];
		this.gender = params[3];
		this.startDate = params[4];
	}
	
	get name() { return this._name; }
	set name(name)
	{
		this._name = name;
	}

	toString() 
	{
		const option = { year: 'numeric', month: 'long', day: 'numeric' };
		const empDate = this.startDate === undefined ? "undefined" :
							 this.startDate.toLocaleDateString("en-US", option);
		return "id= " + this.id + ", name= "+this.name+  ", salary= "+ this.salary + ", "+
					"gender= "+this.gender+ ", startDate= "+ empDate;
	}
}
let employeePayrollData = new EmployeePayrollData(1, 'Mark', 3000);
console.log(employeePayrollData.toString());

let newEmployeePayrollData = new EmployeePayrollData(2, 'Terisa', 3000, "F", new Date());
console.log(newEmployeePayrollData.toString());