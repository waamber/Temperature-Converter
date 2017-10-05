//When convert button is clicked: convert, build string and color change will run.
var btn = document.getElementById("convertBtn");

//Convert input into F or C
function ultimateConverter() {
	var input = +document.getElementById("numberInput").value; //+ in front of input var is to turn input string into a number
	var selectedTemp = document.querySelector('input[name="tempValue"]:checked').value;
	var converted = inputConvert(input, selectedTemp);
	var color = colorChange(converted, selectedTemp);
		buildTemp(converted, color);
		console.log(converted);
};

//Runs ultimateConverter when clicked
btn.addEventListener("click", function() {
	ultimateConverter();
});

//Runs ultimateConverter when you press enter 

document.onkeydown = pressEnter  
	function pressEnter (event) {
		if (event.keyCode === 13) {
			debugger
    	ultimateConverter();
	}
};

//Convert input to temps
function inputConvert(input, selectedTemp) {
	if(selectedTemp === "farenheit") {
		 return Math.floor((input - 32) * 5/9);
	}else if(selectedTemp === "celcius") {
		 return Math.floor(input * 9/5 + 32);
	}
};

//Take converted temp and build string to put in DOM
function buildTemp(converted, colorChange) {
	var tempContainer = document.getElementById("tempResult");
	var convertedString = "";
	convertedString +=	'<h1 id="' + colorChange + '">' + converted + '</h1>';
	tempContainer.innerHTML = convertedString;
};

//Convert temps to appropriate colors
function colorChange(converted, selectedTemp) {
	var selectedTemp = document.querySelector('input[name="tempValue"]:checked').value;
	if (selectedTemp === "farenheit" && converted > 90 || selectedTemp === "celcius" && converted > 32) {
		return "red";
	} else if (selectedTemp === "farenheit" && converted < 32 || selectedTemp === "celcius" && converted < 0) {
		return "blue";
	} else {
		return "green";
	}
};

//Clear Form 
function clearForm() {
	document.getElementById("tempForm").reset();
};



