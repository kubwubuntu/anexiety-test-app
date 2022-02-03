var formElement = document.forms['quizForm'];

formElement.onsubmit = function submitAnswers(){
	var total = 7;
	var score = 0;
	
	// Get User Input
	var q1 = parseInt(document.forms["quizForm"]["q1"].value),
	    q2 = parseInt(document.forms["quizForm"]["q2"].value),
	    q3 = parseInt(document.forms["quizForm"]["q3"].value),
	    q4 = parseInt(document.forms["quizForm"]["q4"].value),
	    q5 = parseInt(document.forms["quizForm"]["q5"].value),
		q6 = parseInt(document.forms["quizForm"]["q6"].value),
		q7 = parseInt(document.forms["quizForm"]["q7"].value);
	
	// Check Answers
	var result = (q1 + q2 + q3 + q4 + q5 + q6 + q7 ) * 1 ;
	
	// Display Results
	var results = document.getElementById('results');
	if(result >= 7){
       solut = 'No mental disorder';
	} else if(result >= 14){
	   solut = 'No mental disorder';
	} else if(result >= 21){
		solut = 'No mental disorder';
	 }
	results.innerHTML = '<h3>You are  <span>'+result+' '+ solut + ' </h3>';
	
	return false;
}