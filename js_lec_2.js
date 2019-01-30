//comparision operators

// == used to compare equal values

var a = 20;
var b = 20;

document.write(a == b);

// === used for comparison but 
// data type is also checked

var x = 100;
var y = "100";

document.write("<br><br>");

// if/else statement 
if(a > b){
	document.write("Han a bara he b se");
} else {
	document.write("Nahi, a chota he.");
}

// if/else-if statement 
if(a > b){
	document.write("a is greater than b");
} else if(b > a) {
	document.write("b is greater than a");
} else {
	document.write("koi condition true nahi he");
}

document.write("<br><br>");
document.write(x == y);

document.write("<br><br>");
document.write(x === y);

// != (not equal to)

document.write("<br><br>");
document.write(a != b);

// !== (not equal to, the data type is also checked)

document.write("<br><br>");
document.write(x !== y);


// > (greater than)

document.write("<br><br>");
document.write(a > b);

// > (less than)

document.write("<br><br>");
document.write(a < b);

document.write("<br><br>");
document.write("The End");

// >= (great than OR equal to) 

document.write("<br><br>");
document.write(a >= b);

// <= (less than OR equal to)

// &&, ||, !

document.write("<br><br>");
document.write(a >= b);

// ternoary operator

document.write("<br><br>");
var isAdult;
var age = 50;
isAdult = (age < 18) ? "Too Young" : "Old Enough";
document.write(isAdult);

// String Concatination

document.write("<br><br>");
var firstName = "Shajeel ";
var secondName = "Afzal";
var fullName = firstName + secondName;



















