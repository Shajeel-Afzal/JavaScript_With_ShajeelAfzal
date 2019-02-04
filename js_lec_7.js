
// cloneNode
// appendChild
// createTextNode
// removeChild
// replaceChild

var quiz1 = {
	question: "What is the square root of 100?",
	answers: [
		{answer: "1", url:""},
		{answer: "12", url:""},
		{answer: "10", url:""},
		{answer: "7", url:"IMAGE_URL"}
	],
	correctAnswer: 2,
	help: ["YOUTUBE_URL", "TITLE"]
};

var quiz2 = {
	question: "What is the sum of 1 and 5?",
	answers: [
		{answer: "2", url:""},
		{answer: "800", url:""},
		{answer: "199", url:""},
		{answer: "600", url:"IMAGE_URL"}
	],
	correctAnswer: 0,
	help: ["YOUTUBE_URL", "TITLE"]
};

var quiz3 = {
	question: "What is the sum of 8 and 5?",
	answers: [
		{answer: "3", url:""},
		{answer: "900", url:""},
		{answer: "299", url:""},
		{answer: "500", url:"IMAGE_URL"}
	],
	correctAnswer: 0,
	help: ["YOUTUBE_URL", "TITLE"]
};

var quiz4 = {
	question: "What is the result of 8 * 5",
	answers: [
		{answer: "40", url:""},
		{answer: "50", url:""},
		{answer: "60", url:""},
		{answer: "70", url:"IMAGE_URL"}
	],
	correctAnswer: 0,
	help: ["YOUTUBE_URL", "TITLE"]
};

var quiz5 = {
	question: "The multiplicative inverse of 4 is",
	answers: [
		{answer: "-4", url:""},
		{answer: "-1/4", url:""},
		{answer: "1/4", url:""},
		{answer: "1", url:"IMAGE_URL"}
	],
	correctAnswer: 0,
	help: ["YOUTUBE_URL", "TITLE"]
};

var quiz6 = {
	question: "{ 1, 2, 3, 4, 5, 6 ...................} is called as the set of .....",
	answers: [
		{answer: "Prime numbers", url:""},
		{answer: "Whole numbers", url:""},
		{answer: "Naturat numbers", url:""},
		{answer: "Irrational numbers", url:"IMAGE_URL"}
	],
	correctAnswer: 0,
	help: ["YOUTUBE_URL", "TITLE"]
};

var quiz7 = {
	question: "A ............... is system of non-empty set on which a binary operation defined.",
	answers: [
		{answer: "Groupiod", url:""},
		{answer: "Group", url:""},
		{answer: "Semi-group", url:""},
		{answer: "N.O.T", url:"IMAGE_URL"}
	],
	correctAnswer: 0,
	help: ["YOUTUBE_URL", "TITLE"]
};


// Set first question data
document.getElementById("question").innerHTML = quiz1.question;
document.getElementById("a1").innerHTML = quiz1.answers[0].answer;
document.getElementById("a2").innerHTML = quiz1.answers[1].answer;
document.getElementById("a3").innerHTML = quiz1.answers[2].answer;
document.getElementById("a4").innerHTML = quiz1.answers[3].answer;

var question_container = document.getElementById("quetsion_container");

var body = document.getElementById("body");
var questions = new Array(quiz1, quiz2, quiz3, quiz4, quiz5, quiz6, quiz7);

for(var j=1; j<questions.length; j++){
	// clone the node
	var duplicateQuestion = question_container.cloneNode(true);
	
	for(var k=0; k<duplicateQuestion.childNodes.length; k++){

		if (duplicateQuestion.childNodes[k].id != 'undefined' && 
			duplicateQuestion.childNodes[k].id == "question") {

			duplicateQuestion.childNodes[k].innerHTML = questions[j].question;

		} 

		else if(duplicateQuestion.childNodes[k].id != 'undefined' && 
			duplicateQuestion.childNodes[k].id == "a1"){

			duplicateQuestion.childNodes[k].innerHTML = questions[j].answers[0].answer;

		} else if(duplicateQuestion.childNodes[k].id != 'undefined' && 
			duplicateQuestion.childNodes[k].id == "a2"){

			duplicateQuestion.childNodes[k].innerHTML = questions[j].answers[1].answer;	

		} else if(duplicateQuestion.childNodes[k].id != 'undefined' && 
			duplicateQuestion.childNodes[k].id == "a3"){

			duplicateQuestion.childNodes[k].innerHTML = questions[j].answers[2].answer;	

		} else if(duplicateQuestion.childNodes[k].id != 'undefined' && 
			duplicateQuestion.childNodes[k].id == "a4"){

			duplicateQuestion.childNodes[k].innerHTML = questions[j].answers[3].answer;	
		}
	}	

	// add child nodes
	body.appendChild(duplicateQuestion);
}

// // var answer1 = document.getElementById("answer1");
// var body = document.getElementById("body");
// body.appendChild(duplicateQuestion);

// document.write(quiz.question);
// if (quiz.answers[3].url == "") {
// 	// hide the image tag
// } else {
// 	// show the image tag
// };

// if (quiz.answers[0].url == "") {
// 	// hide the image tag
// } else {
// 	// show the image tag
// };

// if (quiz.answers[1].url == "") {
// 	// hide the image tag
// } else {
// 	// show the image tag
// };

// if (quiz.answers[2].url == "") {
// 	// hide the image tag
// } else {
// 	// show the image tag
// };

/*
objectName.methodName();
document.write();
*/

// method: function(){
// 	code
// }

// var car = {
// 	buildDate: 2015,
// 	color: "blue",
// 	model: 2017,
// 	engine: "1300cc",
// 	abc: ["item1", "item2"],
// 	owner: {
// 		name: "Jhon",
// 		age: 26,
// 		education: "Masters"
// 	}
// };





