var currentTab = 0; // Current tab is set to be the first tab (0)
showTab(currentTab); // Display the current tab

function showTab(n) {
  // This function will display the specified tab of the form...
  var x = document.getElementsByClassName("tab");
  x[n].style.display = "block";
  //... and fix the Previous/Next buttons:
  if (n == 0) {
    document.getElementById("prevBtn").style.display = "none";
  } else {
    document.getElementById("prevBtn").style.display = "inline";
  }
  if (n == (x.length - 1)) {
    document.getElementById("nextBtn").innerHTML = "Check";
  } else {
    document.getElementById("nextBtn").innerHTML = "Next";
  }
  //... and run a function that will display the correct step indicator:
  fixStepIndicator(n)
}

function nextPrev(n) {
  // This function will figure out which tab to display
  var x = document.getElementsByClassName("tab");
  // Exit the function if any field in the current tab is invalid:
  if (n == 1 && !validateForm()) return false;
  // Hide the current tab:
  x[currentTab].style.display = "none";
  // Increase or decrease the current tab by 1:
  currentTab = currentTab + n;
  // if you have reached the end of the form...
  if (currentTab >= x.length) {
    // ... the form gets submitted:
    document.getElementById("regForm").onclick = function submitAnswers(){
	var total = 7;
	var score = 0;
	
	// Get User Input
	var q1 = parseInt(document.forms["quizForm"]["q1"].value),
	    q2 = parseInt(document.forms["quizForm"]["q2"].value),
	    q3 = parseInt(document.forms["quizForm"]["q3"].value),
	    q4 = parseInt(document.forms["quizForm"]["q4"].value),
	    q5 = parseInt(document.forms["quizForm"]["q5"].value),
	   	q6 = parseInt(document.forms["quizForm"]["q6"].value),
	  	q7 = parseInt(document.forms["quizForm"]["q7"].value),
      q8 = parseInt(document.forms["quizForm"]["q8"].value),
      q9 = parseInt(document.forms["quizForm"]["q9"].value),
      q10= parseInt(document.forms["quizForm"]["q10"].value),
      q11= parseInt(document.forms["quizForm"]["q11"].value),
      q12 = parseInt(document.forms["quizForm"]["q12"].value),
      q13 = parseInt(document.forms["quizForm"]["q13"].value),
      q14 = parseInt(document.forms["quizForm"]["q14"].value),
      q15 = parseInt(document.forms["quizForm"]["q15"].value),
      q16 = parseInt(document.forms["quizForm"]["q16"].value),
      q17 = parseInt(document.forms["quizForm"]["q17"].value),
      q18 = parseInt(document.forms["quizForm"]["q18"].value);
	
	// Check Answers
	var result = (q1 + q2 + q3 + q4 + q5 + q6 + q7 + q8 + q9 + q10 + q11 + q12 + q13 + q14  + q15 + q16 + q17 + q18 ) * 1 ;
	const resultOne  = ' <p>You are unlikely to be Little or No Indication of a depression Disorder The scores you have given suggest that Little / none indication that you have symptoms common among people with a depression disorder.However, this is a very quick test and people experience depression in many different ways. They should be followed up with a professional assessment.So if you are concerned we would alwaysrecommend seeking mental health professional. Give us a call: +250 737 696 210 </p>';

  const resultTwo = '<p> You are unlikely to be suffering from depression The scores you have given suggest may be suffering from Moderate Depression. Consider watchful waiting, and testing again normally within two weeks. We additionally suggest it would be prudent to start a conversation with your doctor. If you need help finding a mental health professional, we suggest that you reach out to: +250 737 696 210</p>';
  	
  const resultThree = '<p> The scores you have given suggest, you are suffering from severe depression. It is important that you schedule an appointment with your doctor or a mental health worker now. The symptoms you report can be debilitating, impacting on many areas of your life. Whilst depression can be difficult to understand for those suffering and their families, it can be successfully treated, and many people go on to lead happy, fulfilled lives. We can arrange private psychiatric assessments and therapy sessions at one of our professionals: Give us a call: +250 737 696 210 </p>';
   
  const resultFour = '<p> The scores you have given suggest are very likely to be suffering with depression and report many of the common symptoms. It is important that you schedule an appointment with your doctor or a mental health worker now. The symptoms you report are very serious. Whilst depression can be difficult to understand for those suffering and their families, it can be successfully treated and many people go on to lead happy, fulfilled lives. We can arrange private psychiatric assessments and therapy sessions at one of our professionals: Give us a call: +250 737 696 210 </p>'
  var results = document.getElementById('results');
	if(result <= 21){ 
	   results.innerHTML = resultOne;
	} else if(result <= 42){
	   
	   results.innerHTML = resultTwo;
	} else if(result <= 63){
		
		results.innerHTML =resultThree;
	 } else{
		
		results.innerHTML = resultFour;
	 }
	
	 document.getElementById("prevBtn").style.display = "none";
	return false;
};


    return false;
  }
  // Otherwise, display the correct tab:
  showTab(currentTab);
}

function validateForm() {
  // This function deals with validation of the form fields
  var x, y, i, valid = true;
  x = document.getElementsByClassName("tab");
  y = x[currentTab].getElementsByTagName("input");
  // A loop that checks every input field in the current tab:
  for (i = 0; i < y.length; i++) {
    // If a field is empty...
    if (y[i].value == "") {
      // add an "invalid" class to the field:
      y[i].className += " invalid";
      // and set the current valid status to false
      valid = false;
    }
  }
  // If the valid status is true, mark the step as finished and valid:
  if (valid) {
    document.getElementsByClassName("step")[currentTab].className += " finish";
  }
  return valid; // return the valid status
}

function fixStepIndicator(n) {
  // This function removes the "active" class of all steps...
  var i, x = document.getElementsByClassName("step");
  for (i = 0; i < x.length; i++) {
    x[i].className = x[i].className.replace(" active", "");
  }
  //... and adds the "active" class on the current step:
  x[n].className += " active";
}



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
	  	q7 = parseInt(document.forms["quizForm"]["q7"].value),
        q8 = parseInt(document.forms["quizForm"]["q8"].value),
        q9 = parseInt(document.forms["quizForm"]["q9"].value),
        q10= parseInt(document.forms["quizForm"]["q10"].value),
        q11= parseInt(document.forms["quizForm"]["q11"].value),
        q12 = parseInt(document.forms["quizForm"]["q12"].value),
        q13 = parseInt(document.forms["quizForm"]["q13"].value),
        q14 = parseInt(document.forms["quizForm"]["q14"].value),
        q15 = parseInt(document.forms["quizForm"]["q15"].value),
        q16 = parseInt(document.forms["quizForm"]["q16"].value),
        q17 = parseInt(document.forms["quizForm"]["q17"].value),
        q18 = parseInt(document.forms["quizForm"]["q18"].value);
	
	// Check Answers
	var result = (q1 + q2 + q3 + q4 + q5 + q6 + q7 + q8 + q9 + q10 + Q11 + q12 + q13 + q14  + q15 + q16 + q17 + q18 ) * 1 ;
	
	// Display Results
	var results = document.getElementById('results');
	if(result <= 7){
       solut = 'No mental disorder';
	   results.innerHTML = '<h3>You are  <span>'+result+' '+ solut + ' </h3>';
	} else if(result <= 14){
	   solutt = 'Normal situations';
	   results.innerHTML = '<h3>You are  <span>'+result+' '+ solutt + ' </h3>';
	} else if(result <= 21){
		soluttt = 'abnormal situations ';
		results.innerHTML = '<h3>You are  <span>'+result+' '+ soluttt + ' </h3>';
	 } else{
		solutttt = 'Worse case ';
		results.innerHTML = '<h3>You are  <span>'+result+' '+ solutttt + ' </h3>';
	 }
	
	
	return false;
}