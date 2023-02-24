function setup() {

    document.getElementById("btn-submit").addEventListener("click", submitInfo);

}


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

    if (sex == "Male") {
        if ((bmi > 23) && (waist => 90)) {
            alert("RED ALERT - your BMI is " + bmi + ". You need to urgently lose weight. Here's your new diet.")
        } else if ((bmi > 23) && (waist < 90)) {
            alert("Your BMI is " + bmi + ". You need to lose weight. Change your diet.")
        } else if ((bmi < 23) && (waist > 90)) {
            alert("Your BMI is " + bmi + ". But check your stats and input again.")
        } else if ((bmi < 23) && (waist < 90)) {
            alert("Your BMI is " + bmi + ". You are doing great!  Keep on going and check in regularly.")
        } else {
            alert("unchecked male condition")
        }
    } else {
        if ((bmi > 23) && (waist => 80)) {
            alert("RED ALERT - your BMI is " + bmi + ". You need to urgently lose weight. Here's your new diet.")
        } else if ((bmi > 23) && (waist < 80)) {
            alert("Your BMI is " + bmi + ". You need to lose weight. Change your diet.")
        } else if ((bmi < 23) && (waist > 80)) {
            alert("Your BMI is " + bmi + ". But check your stats and input again.")
        } else if ((bmi < 23) && (waist < 80)) {
            alert("Your BMI is " + bmi + ". You are doing great!  Keep on going and check in regularly.")
        } else {
            alert("unchecked female condition")
        }
    }

    
}




// Here is the main program

setup();