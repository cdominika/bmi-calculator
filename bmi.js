const weight = document.getElementById("weight");
const height = document.getElementById("height");
const button = document.getElementById("calc");


function countBmi() {
    if (isNaN(weight.value) || isNaN(height.value)) {
        console.warn("podaj liczbę");
    } else if (weight.value == "" || height.value == "") {
        return;
    } else {
        let bmi = weight.value / (height.value * height.value);
        if (bmi < 16) {
            console.log("wygłodzenie");
        } else if (bmi >= 16 && bmi <= 16.99) {
            console.log("wychudzenie");
        } else if (bmi > 16.99 && bmi <= 18.49) {
            console.log("niedowaga");
        } else if (bmi >= 18.5 && bmi <= 24.99) {
            console.log("waga prawidłowa");
        } else if (bmi >= 25 && bmi <= 29.99) {
            console.log("nadwaga");
        } else if (bmi >= 30 && bmi <= 34.99) {
            console.log("I stopień otyłości");
        } else if (bmi >= 35 && bmi <= 39.99) {
            console.log("II stopień otyłości");
        } else if (bmi >= 40) {
            console.log("otyłość skrajna");
        }
    }
    height.value = "";
    weight.value = "";
}

button.onclick = countBmi;