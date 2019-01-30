// switch statement

// Syntax
// switch(expression){
// 	case n1:
// 		statements;
// 		break;
// 	case n2:
// 		statements;
// 		break;
// 	default:
// 		statements;
// }


var number = 2;
switch(number){
	case 1:
		document.write("Case 1 Matched!");
		break;
	case 2:
		document.write("Case 2 Matched!<br>");
		break;
	case 10:
		document.write("Case 10 Matched!");
		break;	
	default:
		document.write("Default Case Matched!");
}

// loops
// document.write("eRozgaar<br>");
// for(statement 1; statement 2; statement 3){
// 	// statements
// }

// statement 1: executes before the loop 
// starts

// statement 2: define the condition
// for running the app.

// statement 3: executes after every loop

// for(var i=0; i < 1000; i++){
// 	document.write("eRozgaar<br>");
// }

// for(var a=0; false; a++){
// 	document.write("eRozgaar<br>");	
// }

// document.write("Ajeeb c for loop<br><br>");

// var x = 1;
// for(document.write("for loop statement 1<br>"); 
// 	x <= 2; 
// 	document.write("for loop statement 3<br>"))
// {
// 	document.write("eRozgaar<br>");	
// 	x++;
// }

// document.write("<br><br>Ajeeb c for loop<br><br>");

// var z=1;
// for(;z<=10;){
// 	z++
// 	document.write("eRozgaar<br>");
// }

document.write("<table><tr><th>ID</th><th>Name</th><th>CNIC</th><th>Domain</th></tr>");
for(var z=0; z<=9; z++){
	document.write("<tr><td>"+ z +"</td><td>Shajeel</td><td>35302</td><td>Domain</td></tr>");
}
document.write("</table>");

var html = '<table style="width:100%"> \
	  <tr>\
	    <th>ID</th>\
	    <th>Name</th> \
	    <th>CNIC</th> \
	    <th>Domain</th> \
	  </tr> \
	  <tr> \
	    <td>1</td> \
	    <td>Shajeel</td> \
	    <td>35302</td> \
	    <td>Domain</td> \
	  </tr> \
	</table> \
	'

var str = '<div data-role="page" data-add-back-btn="true" id="Gallery2" class="gallery-page"> \
    <div data-role="header">  \
        <h1>Second Gallery</h1> \
    </div> \
    <div data-role="content"> \  
        <ul class="gallery"> \
            <li><a href="images/full/010.jpg" rel="external"><img src="images/thumb/010.jpg" alt="Image 010" /></a></li> \
            <li><a href="images/full/011.jpg" rel="external"><img src="images/thumb/011.jpg" alt="Image 011" /></a></li> \
            <li><a href="images/full/012.jpg" rel="external"><img src="images/thumb/012.jpg" alt="Image 012" /></a></li> \
            <li><a href="images/full/013.jpg" rel="external"><img src="images/thumb/013.jpg" alt="Image 013" /></a></li> \
            <li><a href="images/full/014.jpg" rel="external"><img src="images/thumb/014.jpg" alt="Image 014" /></a></li> \
            <li><a href="images/full/015.jpg" rel="external"><img src="images/thumb/015.jpg" alt="Image 015" /></a></li> \
            <li><a href="images/full/016.jpg" rel="external"><img src="images/thumb/016.jpg" alt="Image 016" /></a></li> \
            <li><a href="images/full/017.jpg" rel="external"><img src="images/thumb/017.jpg" alt="Image 017" /></a></li> \
            <li><a href="images/full/018.jpg" rel="external"><img src="images/thumb/018.jpg" alt="Image 018" /></a></li> \
        </ul> \
    </div> \
    <div data-role="footer"> \
        <h4>&copy; 2011 Code Computerlove</h4> \
    </div> \
</div>';












