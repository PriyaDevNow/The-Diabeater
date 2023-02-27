
/*Global variable */

var diets = [
    "RECOMMENDED DIET: 12 weeks; No wheat/fried foods/alcohol; 1000 daily calories; Macros - 40% protein:30% fat:30% carbs",
    "RECOMMENDED DIET: 12 weeks; No wheat/fried foods/alcohol; 1200 daily calories; Macros - 30% protein:30% fat:30% carbs",
    "RECOMMENDED DIET: 12 weeks; Intermittent fasting: 16/8; 1000 daily calories; Macros - 40% protein:30% fat:30% carbs",
    "RECOMMENDED DIET: 12 weeks; 1000 daily calories; Macros - 40% protein:30% fat:30% carbs",
];

/* Form submit */

function submitInfo() {

    let height = document.getElementById("height").value;
    let weight = document.getElementById("weight").value;
    let waist = document.getElementById("waist").value;

    let sexM = document.getElementById("male").checked;
    let sexF = document.getElementById("female").checked;

    let sex = '';

    if (sexM) {
        sex = document.getElementById("male").value
    } else {
        sex = document.getElementById("female").value
    }


    let bmi = (Math.floor(weight / ((height * height) / 10000)));

    let myMessage = '';

    if (sex == "Male") {
        if ((bmi > 23) && (waist => 90)) {
            myMessage = "RED ALERT - your BMI is " + bmi + "! You are at a high risk of getting diabetes. You need to urgently lose weight. Please see your new diet suggestion below."
        } else if ((bmi > 23) && (waist < 90)) {
            myMessage = "Your BMI is " + bmi + "! You are at risk of getting diabetes.  You need to lose weight. Please see your new diet suggestion below."
        } else if ((bmi < 23) && (bmi > 18) && (waist > 90)) {
            myMessage = "Your BMI is " + bmi + ". But check your stats and input again."
        } else if ((bmi < 23) && (bmi > 18) && (waist < 90)) {
            myMessage = "Your BMI is " + bmi + ". You are doing great!  Keep on going and check in regularly."
        } else if ((bmi < 18) && (waist > 90)) {
            myMessage = "Your BMI is " + bmi + ". But check your stats and input again."
        } else if ((bmi < 18) && (waist < 90)) {
            myMessage = "Your BMI is " + bmi + ". YOu need to increase your weight.  Please see your new diet suggestion below."
        } else {
            myMessage = "unchecked male condition"
        }
    }
    if (sex == "Female") {
        if ((bmi > 23) && (waist => 80)) {
            myMessage = "RED ALERT - your BMI is " + bmi + "! You are at a high risk of getting diabetes. You need to urgently lose weight. Please see your new diet suggestion below."
        } else if ((bmi > 23) && (waist < 80)) {
            myMessage = "Your BMI is " + bmi + "! You are at risk of getting diabetes.  You need to lose weight. Please see your new diet suggestion below."
        } else if ((bmi < 23) && (bmi > 18) && (waist > 80)) {
            myMessage = "Your BMI is " + bmi + ". But check your stats and input again."
        } else if ((bmi < 23) && (bmi > 18) && (waist < 80)) {
            myMessage = "Your BMI is " + bmi + ". You are doing great!  Keep on going and check in regularly."
        } else if ((bmi < 18) && (waist > 80)) {
            myMessage = "Your BMI is " + bmi + ". But check your stats and input again."
        } else if ((bmi < 18) && (waist < 80)) {
            myMessage = "Your BMI is " + bmi + ". YOu need to increase your weight.  Please see your new diet suggestion below."
        } else {
            alert("unchecked female condition")
        }
    }

    document.getElementById("feedback").innerText = myMessage;

    document.getElementById("diet").innerText = diets[Math.floor(Math.random()*4)]; 
}


function setup() {

    document.getElementById("mySubmit").addEventListener("click", submitInfo);

}

/* feedback */

function giveFeedback() {

}



// Here is the main program

setup();