
// 1st way of creating Arrays
var students = new Array("35303","35302", "35301");
students[0] = "35304";
document.write(students[0]+"<br>");

// 2nd way of creating Arrays
var courses = new Array();
courses[0] = "Technical";
courses[1] = "Non-Technical";
courses[2] = "Creative";
document.write(courses+"<br>");

// 3rd way of creating Arrays;
var programmingLangues = ["Python", "C++","Java", "PHP", "JavaScript"];
document.write(programmingLangues.length);
document.write("<br>"+courses.length);

var stdCourses = courses.concat(students);
document.write("<br>"+stdCourses);

// associative arrays
var person1 = [];
person1["name"] = "Shajeel";
person1["domain"] = "Technical";

var person2 = [];
person2["name"] = "Studnet2";
person2["domain"] = "Technical";


document.write("<br>"+person1["domain"]);

var persons = [];
persons[0] = person1;
person2[1] = person2;

document.write("<br>" + persons);

document.write("<br><br>Looping through Arrays<br><br>");
for(var i=0; i<courses.length;i++){
	document.write(courses[i]+"<br>");
}

document.write("<br><h1>Math Object</h1><br>");

document.write(Math.PI);











