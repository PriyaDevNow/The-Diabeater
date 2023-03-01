// Global variables

var thousanddiets = [
    "RECOMMENDED DIET: 12 weeks; No wheat/rice/cheeses/fried foods/added sugar/alcohol; 1000 daily calories. Click below to see your sample weekly diet plan.",
    "RECOMMENDED DIET: 12 weeks; Intermittent fasting: 16/8; 1000 daily calories. Click below to see your sample weekly diet plan."
];

var twelvehundreddiets = [
    
    "RECOMMENDED DIET: 12 weeks; No wheat/rice/cheeses/fried foods/added sugar/alcohol; 1200 daily calories. Click below to see your sample weekly diet plan.",
    "RECOMMENDED DIET: 12 weeks; 1000 daily calories. Click below to see your sample weekly diet plan."
];



// Form submit


function submitInfo() {

    let height = document.getElementById("height").value;
    let weight = document.getElementById("weight").value;
    let waist = document.getElementById("waist").value;

    let sexM = document.getElementById("male").checked;
    let sexF = document.getElementById("female").checked;

    let sex = "";

    if (sexM) {
        sex = document.getElementById("male").value
    } else {
        sex = document.getElementById("female").value
    }


    let bmi = (Math.floor(weight / ((height * height) / 10000)))

    let myMessage = "";

    if (sex == "Male") {
        if ((bmi > 23) && (waist >= 90)) {
            myMessage = "RED ALERT - your BMI is " + bmi + "! You are at a high risk of getting diabetes. You need to urgently lose weight. Follow the recommended diet plan below."
            
            //place a random recipe in the "diet" paragraph of the html
            document.getElementById("diet").innerText = thousanddiets[Math.floor(Math.random()*2)]
 
        } else if ((bmi > 23) && (waist < 90)) { 
            myMessage = "Your BMI is " + bmi + "! You are at risk of getting diabetes.  You need to lose weight. Follow the recommended diet plan below.";

            //place a random recipe in the "diet" paragraph of the html
            document.getElementById("diet").innerText = twelvehundreddiets[Math.floor(Math.random()*2)]

        } else if ((bmi < 23) && (bmi > 18) && (waist > 90)) {
            myMessage = "Your BMI is " + bmi + ". But check your stats and input again."
        } else if ((bmi < 23) && (bmi > 18) && (waist < 90)) {
            myMessage = "Your BMI is " + bmi + ". You are doing great!  Keep on going and check in regularly."
        } else if ((bmi < 18) && (waist > 90)) {
            myMessage = "Your BMI is " + bmi + ". But check your stats and input again."
        } else if ((bmi < 18) && (waist < 90)) {
            myMessage = "Your BMI is " + bmi + ". You need to increase your weight.  We will come back with your new diet plan."
        } else {
            myMessage = "unchecked male condition"
        }
    }
    if (sex == "Female") {
        if ((bmi > 23) && (waist >= 80)) {
            myMessage = "RED ALERT - your BMI is " + bmi + "! You are at a high risk of getting diabetes. You need to urgently lose weight. Follow the recommended diet plan below."

            //place a random recipe in the "diet" paragraph of the html
            document.getElementById("diet").innerText = thousanddiets[Math.floor(Math.random()*2)]

        } else if ((bmi > 23) && (waist < 80)) {
            myMessage = "Your BMI is " + bmi + "! You are at risk of getting diabetes.  You need to lose weight. Follow the recommended diet plan below."

            //place a random recipe in the "diet" paragraph of the html
            document.getElementById("diet").innerText = twelvehundreddiets[Math.floor(Math.random()*2)]

        } else if ((bmi < 23) && (bmi > 18) && (waist > 80)) {
            myMessage = "Your BMI is " + bmi + ". But check your stats and input again."
        } else if ((bmi < 23) && (bmi > 18) && (waist < 80)) {
            myMessage = "Your BMI is " + bmi + ". You are doing great!  Keep on going and check in regularly."
        } else if ((bmi < 18) && (waist > 80)) {
            myMessage = "Your BMI is " + bmi + ". But check your stats and input again."
        } else if ((bmi < 18) && (waist < 80)) {
            myMessage = "Your BMI is " + bmi + ". You need to increase your weight.  We will come back with your new diet plan."
        } else {
            myMessage = ("unchecked female condition")
        }
    }

    // feedback

    document.getElementById("feedback").innerText = myMessage

}


function setup() {

    document.getElementById("mySubmit").addEventListener("click", submitInfo)

}

function feedback () {
    document.getElementById("feedback").innerText = myMessage
}





// Here is the main program

setup();