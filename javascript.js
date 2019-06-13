// store each number already passed back so can check if this number had already been sent back
var alreadyGeneratedNumbers = [];

function storeAlreadyGeneratedNumbers(randomNumber) {
	"use strict";
	
	var index;

	// check array if latest generated number had already been passed back
	// if not, store the number in this array and move onto passing number back
	for (index = 0; index <= alreadyGeneratedNumbers.length; index += 1) {
		if (randomNumber === alreadyGeneratedNumbers[index]) {
			return true;
		}
	} 
	
	alreadyGeneratedNumbers[alreadyGeneratedNumbers.length] = randomNumber;
	
	return false;
	
}

function generateRandomNumber(maximumNumber) {
	"use strict";
	
	var index = true;
	var randomNumber;

	// generate a random number no higher than length of staff array
	randomNumber = Math.round(Math.random() * (maximumNumber - 1));

	while (index) {
		randomNumber = Math.round(Math.random() * (maximumNumber - 1));
		index = storeAlreadyGeneratedNumbers(randomNumber);
	}

	// send the randomly generated number back to the requesting source
	return randomNumber;
	
}

function team() {
	"use strict";
	
	// list of team members per team
	var gboMain = ["Pao","Bob","Mark","Stu","John","Brenda","Dan","Earl","Ravendra","Matt"];
	
	// get user input and open output element
	//*var teamSelected = document.getElementById("teamSelected").value; 
	var attendance = document.getElementById("attendanceBox");
	var developer = document.getElementById("developer");
	var done = document.getElementById("done");
	
	// set variables for checkbox outputs
	var checkBox = "<p><input type='checkbox' class='checkBox'></p>";
	var randomNumber;
	
	// call function to get randomly generated number
	while (alreadyGeneratedNumbers.length <= gboMain.length) {
			if (alreadyGeneratedNumbers.length === gboMain.length) {
				break;
			} else if (alreadyGeneratedNumbers.length === 0) {
				randomNumber = generateRandomNumber(gboMain.length);
				attendance.innerHTML += checkBox;
				developer.innerHTML += "<p>" + gboMain[randomNumber] + "</p>";
				done.innerHTML += checkBox;
			} else {
				randomNumber = generateRandomNumber(gboMain.length);
				attendance.innerHTML += checkBox;
				developer.innerHTML += "<p>" + gboMain[randomNumber] + "</p>";
				done.innerHTML += checkBox;
			}
	}



}







