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
    document.getElementById("texttop").innerHTML = "Demographic Information";
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
      q19 = parseInt(document.forms["quizForm"]["q19"].value);
      q20 = parseInt(document.forms["quizForm"]["q20"].value);
      q21 = parseInt(document.forms["quizForm"]["q21"].value);
	
	// Check Answers
	var result = (q1 + q2 + q3 + q4 + q5 + q6 + q7 + q8 + q9 + q10 + q11 + q12 + q13 + q14  + q15 + q16 + q17 + q18 + q19 + q20  + q21) * 1 ;
	const resultOne  = ' <p><h2> ' +  result + '/ 82</h2>  <span class="green"> Ntakimenyetso cg ufite kigero gito cyane</span><br><br><b>Ntakimenyetso cyangwa ku kigero gito cyane  ukuba ufite Indwara yo kwiheba</b><br><br> Amanota wabonye yerekana ko<i>Ntakimenyetso cg ku kigero gito cyane</i> ufite ibimenyetso bikunze kugaragara mubantu bafite ikibazo cy’ agahinda gakabije.<br><br>Icyakora, iki nikizamini cyihuse kandi abantu bahura n’agahinda gakabije muburyo butandukanye. <br><br>Niba rero ufite impungenge twagusaba buri gihe gushaka inzobere mubuzima bwo mumutwe.<br> <span class="callus"> Duhamagare: +250 737 696 210</span> </p>';

  const resultTwo = '<p> <span class="yellow"> Agahinda Kagereranije</span><br><br> Amanota wabonye yerekana ko ashobora kuba ufite <i>agahinda kagereranyije</i>. <br><br> Tegereza uzakore irindi suzuma mubyumweru bibiri.<br><br> Twongeyeho ko byaba byiza utangiye ikiganiro na muganga wawe.<br><br> Niba ukeneye ubufasha bwo kubona inzobere mu buzima bwo mu mutwe, turagusaba ko wahamagara kuri:+250 737 696 210</p>';
    
  const resultThree = '<p>  <span class="orange">Agahinda Kukigero cyo hejuru</span><br><br>  Amanota wabonye yerekana ko, urwaye Agahinda Gakabije <i>Kukigero cyo hejuru</i>. <br><br>Ni ngombwa ko utegura gahunda na muganga wawe cyangwa umukozi ushinzwe ubuzima bwo mu mutwe ubungubu.<br><br> Ibimenyetso ugaragaza nk’intege nke, bigira ingaruka mubice byinshi byubuzima bwawe. <br><br> Mugihe cy agahinda Gakabije bishobora kugorana kubyumva k’umurwayi ndetse no k’umuryango we, ariko birashoboka kuvurwa neza, kandi abantu benshi bakomeza kubaho mubuzima bushimishije, kandi bwuzuye. <br><br>Twa gutegurira isuzuma ryindwara zo mumutwe hamwe nubuvuzi kuri umwe mubahanga bacu.<br> <span class="callus"> Duhamagare kuri: +250 737 696 210</span> </p>';
   
  const resultFour = '<p>  <span class="red">Agahinda Gakabije</span><br><br>Amanota wabonye yerekana ko,  ushobora kuba afite Indwara y’<i>agahinda gakabije kurugero ruhangayikishije</i> no kwerekana byinshi mubimenyetso bya Agahinda Gakabije.<br><br> Ni ngombwa ko uteganya gahunda na muganga wawe cyangwa umukozi ushinzwe ubuzima bwo mu mutwe byihutirwa.<br><br>Ibimenyetso utangaza birakomeye cyane. Mugihe cy agahinda Gakabije bishobora kugorana kubyumva k’umurwayi ndetse no k’umuryango we, birashobokaa kuvurwa neza kandi abantu benshi bakomeza kubaho mubuzima bushimishije.<br><br>Twa gutegurira isuzuma ryindwara zo mumutwe hamwe nubuvuzi kuri umwe mubahanga bacu.<br><br> <span class="callus"> Duhahamagare kuri: +250 737 696 210</p> </p>'
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
     document.getElementById("nextBtn").style.display = "none";
     document.getElementById("again").style.display = "block";
     document.getElementById("dots").style.display = "none";
     document.getElementById("texttop").style.display = "none";
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


