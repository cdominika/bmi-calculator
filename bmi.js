const weight = document.getElementById('weight');
const height = document.getElementById('height');
const button = document.getElementById('calc');
const buttonClose = document.getElementsByClassName('close')[0];
const modal = document.getElementsByClassName('modal')[0];
const mask = document.getElementsByClassName('mask')[0];
let resultTitle = document.getElementsByTagName('h2')[0];
let resultText = document.getElementsByClassName('results')[0];
let smallText = document.getElementsByClassName('small-text')[0];
const commaValue = /,/;
const numberRegEx = /^[0-9]+(,?)(\.?)[0-9]$/;

function showResult() {
    mask.style.display = 'block';
    modal.style.display = 'block';
}

function closeResult() {
    mask.style.display = 'none';
    modal.style.display = 'none';
}

function countBmi() {
    if (!numberRegEx.test(weight.value) || !numberRegEx.test(height.value)) {
        console.warn("podaj liczbę");
        showResult();
        resultTitle.innerHTML = "Podane dane są nieprawidłowe";
        smallText.style.display = "none";
    } else if (weight.value == "" || height.value == "") {
        return;
        }
    if (commaValue.test(weight.value) || commaValue.test(height.value)) {
        let weightC = weight.value.replace(commaValue, ".");
        let heightC = height.value.replace(commaValue, ".") / 100;
        bmi = weightC / (heightC * heightC);
    } else {
        let weightC = weight.value;
        let heightC = height.value / 100;
        bmi = weightC / (heightC * heightC);
        }
        showResult();
        if (bmi < 16) {
            resultTitle.innerHTML = "Wygłodzenie";
            console.log("wygłodzenie");
        } else if (bmi >= 16 && bmi <= 16.99) {
            resultTitle.innerHTML = "Wychudzenie";
            console.log("wychudzenie");
        } else if (bmi > 16.99 && bmi <= 18.49) {
            resultTitle.innerHTML = "Niedowaga";
            console.log("niedowaga");
        } else if (bmi >= 18.5 && bmi <= 24.99) {
            resultTitle.innerHTML = "Waga prawidłowa";
            console.log("waga prawidłowa");
        } else if (bmi >= 25 && bmi <= 29.99) {
            resultTitle.innerHTML = "Nadwaga";
            console.log("nadwaga");
        } else if (bmi >= 30 && bmi <= 34.99) {
            resultTitle.innerHTML = "I stopień otyłości";
            console.log("I stopień otyłości");
        } else if (bmi >= 35 && bmi <= 39.99) {
            resultTitle.innerHTML = "II stopień otyłości";
            console.log("II stopień otyłości");
        } else if (bmi >= 40) {
            resultTitle.innerHTML = "Otyłość skrajna";
            console.log("otyłość skrajna");

    }
    height.value = "";
    weight.value = "";
}

button.onclick = countBmi;
buttonClose.onclick = closeResult;