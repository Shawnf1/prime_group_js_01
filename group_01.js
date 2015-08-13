function Employee(name, number, salary, rating) {
	this.name = name;
	this.number = number;
	this.salary = salary;
	this.rating = rating;
	this.percent;
	this.adjusted;
	this.bonus;


	this.CalcSTI = function (number, salary, rating) {
		var percent;
		switch (rating) {
			case 5:
				percent = .1;
				break;
			case 4:
				percent = .06;
				break;
			case 3:
				percent = .04;
				break;
			default:
				percent = 0;
				break;
		}
		if (number.length == 4) {
			percent += .05;
		}
		if (salary > 65000) {
			percent -= .01;
		}
		if (percent > .13) {
			percent = .13;
		}
		return this.percent = percent;
	};

	this.calcAdjusted = function (salary, percent) {
		return this.adjusted = Math.round(salary *= (1 + percent));
	};

	this.calcBonus = function (salary, percent) {
		return this.bonus = Math.round(salary * percent);
	};


	this.CalcSTI(this.number, this.salary, this.rating);
	this.calcAdjusted(this.salary, this.percent);
	this.calcBonus(this.salary, this.percent);
};

function Company() {
	this.employees = [];
	this.output = new Output();
	this.AddEmployee = function (array) {
		this.employees.push(array);
	};

	this.ShowEmployeeComp = function (employee) {
		var msg = employee.name + " will get a " +
			employee.percent + "% raise, which will raise his/her income to $" +
			employee.adjusted.toLocaleString() + ", with his/her bonus being $" +
			employee.bonus.toLocaleString() + ".";
		return msg;
	};

	this.ShowAllEmployees = function () {
		this.output.CreateUL("employeeComp_ul");
		for (var i = 0; i < this.employees.length; i++) {
			this.output.CreateLI(this.ShowEmployeeComp(this.employees[i]));
		}
		this.output.EndUL();
	}

	this.GetOutput = function () {
		return this.output.GetOutput();
	}
};

function Output() {
	this.html = "";
	this.CreateUL = function (id) {
		this.html += "<ul";
		this.html += " id='"+ id +"'>" || ">";
	}
	this.CreateLI = function(msg)
	{
		this.html += "<li>" + msg + "</li>";
	}
	this.EndUL = function () {
		this.html += "</ul>";
	}
	this.GetOutput = function() {
		return this.html;
	}
}

var atticus = new Employee("Atticus", "2405", "47000", 3);
var jem = new Employee("Jem", "62347", "63500", 4);
var boo = new Employee("Boo", "11435", "54000", 3);
var scout = new Employee("Scout", "6243", "74750", 5);
var company = new Company();
company.AddEmployee(atticus);
company.AddEmployee(jem);
company.AddEmployee(boo);
company.AddEmployee(scout);
company.ShowAllEmployees();

$('#employees').append(company.GetOutput());