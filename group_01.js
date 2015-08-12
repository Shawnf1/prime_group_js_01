var arrayAtticus = ["Atticus", "2405", "47000", 3];
var arrayJem = ["Jem", "62347", "63500", 4];
var arrayBoo = ["Boo", "11435", "54000", 3];
var arrayScout = ["Scout", "6243", "74750", 5];

var employeesArray = [];
employeesArray.push(consumeArray(arrayAtticus));
employeesArray.push(consumeArray(arrayJem));
employeesArray.push(consumeArray(arrayBoo));
employeesArray.push(consumeArray(arrayScout));

for(var i = 0; i < employeesArray.length; i++)
{
	console.log("Employee "+ (i + 1) +" is "+ employeesArray[i]["name"] +", who will get a "+ employeesArray[i]["percent"] +"% raise, which will raise his/her income to $"+ commatize(employeesArray[i]["adjusted"]) +", with his/her bonus being $"+ commatize(employeesArray[i]["bonus"]) +".");
}

function commatize(num)
{
	var string = num.toString();
	var newString = "";
	if(string.length > 3)
	{
		for(var i = 0; i < string.length; i++)
		{
			if((string.length - i) % 3 == 0)
			{
				newString += ","+ string[i];
			}else
			{
				newString += string[i];
			}
		}
	}else
	{
		newString = string;
	}
	return newString;
}

function consumeArray(oldArray)
{
	var newArray = [];
	// copy name over
	newArray["name"] = oldArray[0];
	// calculate percent, then adjusted, then bonus
	var results = calcSTI(oldArray[1], parseInt(oldArray[2]), oldArray[3]);
	console.log(newArray["name"], results);
	newArray["percent"] = results["percent"];
	newArray["adjusted"] = results["adjusted"];
	newArray["bonus"] = results["bonus"];
	return newArray;
}

function calcSTI(num, income, rating)
{
	var percent;
	var adjusted;
	var bonus;
	switch (rating)
	{
		case 5:
			percent = 10;
			adjusted = income * 1.1;
			bonus = income * .1;
			break;
		case 4:
			percent = 6;
			adjusted = income * 1.06;
			bonus = income * .06;
			break;
		case 3:
			percent = 4;
			adjusted = income * 1.04;
			bonus = income * .04;
			break;
		default:
			percent = 0;
			adjusted = income;
			bonus = 0;
			break;
	}
	if(num.length == 4)
	{
		percent += 5;
	}
	if(income > 65000)
	{
		percent--;
	}
	if(percent > 13)
	{
		percent = 13;
	}
	adjusted =  Math.round(income * ((100 + percent) / 100));
	bonus = Math.round(income * percent / 100);
	//var result = []
	return {"percent" : percent, "adjusted" : adjusted, "bonus" : bonus};
}