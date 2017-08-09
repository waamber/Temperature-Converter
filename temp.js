//When convert button is clicked: convert, build string and color change will run.
var btn = document.getElementById("convertBtn");
var resetBtn = document.getElementById("resetBtn");
var form = document.getElementById("tempForm");
var tempContainer = document.getElementById("tempResult");

//Convert input into F or C
function ultimateConverter() {
	var input = +document.getElementById("numberInput").value; //+ in front of input var is to turn input string into a number
	var selectedTemp = document.querySelector('input[name="tempValue"]:checked').value;
	var converted = inputConvert(input, selectedTemp);
	var color = colorChange(converted, selectedTemp);
		buildTemp(converted, color);
};

//Runs ultimateConverter when clicked
btn.addEventListener("click", function() {
	ultimateConverter();
});


//Resets form and returns innerHTML to an empty string
resetBtn.addEventListener("click", function() {
	form.reset();
	tempContainer.innerHTML = "";
});


//Runs ultimateConverter when you press enter 
document.onkeydown = pressEnter  
	function pressEnter (event) {
		if(event.keyCode === 13) {
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





