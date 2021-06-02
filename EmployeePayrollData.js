class EmployeePayrollData
{
	constructor(...params)
	{
		this.id = params[0];
		this.name = params[1];
		this.salary = params[2];
		this.gender = params[3];
		this.startDate = params[4];
	}
	
    get id() { return this._id }
    set id(id)
    {
        if(id < 0)
            throw 'ID: Enter positive integer'
        else this._id = id
    }

	get name() { return this._name; }
	set name(name)
	{
		let nameRegex = RegExp('^[A-Z]{1}[a-z]{2,}$');
		if(nameRegex.test(name))
			this._name = name;
		else {
            throw 'Name is Incorrect!'
        }
	}

    get salary() { return this._salary }
    set salary(salary)
    {
        if(salary < 0 )
            throw 'Salary: Enter positive integer'
        else this._salary = salary
    }

	get gender() { return this._gender }
    set gender(gender)
    {
		let genderRegex = RegExp('^[MF]{1}$')
        if(genderRegex.test(gender) )
		this._gender = gender
		else throw 'Gender Not match'
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

try
{
	let newEmployeePayrollData = new EmployeePayrollData(2, 'Terisa', 3000, "F", new Date());
console.log(newEmployeePayrollData.toString());
}catch(e)
{
	console.error(e)
}
