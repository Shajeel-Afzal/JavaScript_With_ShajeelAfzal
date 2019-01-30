
/*

document.getElementById();
document.getElementByClassName();
document.getElementByTagName();

*/

var paragraphs = document.getElementsByTagName("p");
paragraphs[0].innerHTML = "Hi There";

function validate(){
	var n1 = document.getElementById("num1");
	var n2 = document.getElementById("num2");

	var inputNum1 = n1.value;
	var inputNum2 = n2.value;

	if (inputNum1 == "" || inputNum2 == "") {
		alert("Empty Fields")
		return false;
	} else {
		alert(inputNum1 + inputNum2);
		return true;
	}

	var number1 = parseInt(inputNum1);
	var number2 = parseInt(inputNum2);
}






















