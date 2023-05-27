
const Form1 = document.getElementById('formHealth');
const clearButton1 = document.getElementById('clear1');

function calchealth(event) {
    event.preventDefault();
    let rost = parseInt(document.getElementById("rost").value);
    let massa = parseInt(document.getElementById("massa").value);
    let result = massa / (rost ** 2 / 100 ** 2);
    let resultDiv = document.getElementById("result");
    switch (true) {
        case result <= 16:
            str = "Ваш нидекс " + Math.floor(result) + "  - Выраженный дефицит массы тела";
            resultDiv.classList.add("alert-danger");
            resultDiv.classList.remove("alert-success");
            resultDiv.classList.remove("alert-warning");
            break;

        case result > 16 && result <= 18.5:
            str = "Ваш нидекс " + Math.floor(result) + " - Недостаточная масса тела";
            resultDiv.classList.add("alert-danger");
            resultDiv.classList.remove("alert-success");
            resultDiv.classList.remove("alert-warning");
            break;

        case result >= 18.5 && result <= 24.99:
            str = "Ваш нидекс " + Math.floor(result) + " - Норма";
            resultDiv.classList.add("alert-success");
            resultDiv.classList.remove("alert-danger");
            resultDiv.classList.remove("alert-warning");
            break;

        case result >= 25 && result <= 30:
            str = "Ваш нидекс " + Math.floor(result) + " - Избыточная масса тела";
            resultDiv.classList.add("alert-warning");
            resultDiv.classList.remove("alert-danger");
            resultDiv.classList.remove("alert-success");
            break;

        case result >= 30 && result <= 35:
            str = "Ваш нидекс " + Math.floor(result) + " - Ожирение 1 степени";
            resultDiv.classList.add("alert-danger");
            resultDiv.classList.remove("alert-success");
            resultDiv.classList.remove("alert-warning");
            break;

        case result >= 35 && result <= 40:
            str = "Ваш нидекс " + Math.floor(result) + " - Ожирение 2 степени";
            resultDiv.classList.add("alert-danger");
            resultDiv.classList.remove("alert-success");
            resultDiv.classList.remove("alert-warning");
            break;
        case result > 40:
            str = "Ваш нидекс " + Math.floor(result) + " - Ожирение 3 степени";
            resultDiv.classList.add("alert-danger");
            resultDiv.classList.remove("alert-success");
            resultDiv.classList.remove("alert-warning");
            break;

        default:
            str = "Ошибка ввода данных";
            resultDiv.classList.add("alert-danger");
            resultDiv.classList.remove("alert-success");
            break;
    }




    document.getElementById("result").innerText = str;
}


function clearInput() {

    let rost = document.getElementById("rost").value = '';
    let massa = document.getElementById("massa").value = '';
    let result = document.getElementById("result");

    if (result.classList.contains("alert-danger")) {

        result.classList.remove("alert-danger");
        result.classList.remove("alert-warning");
        result.innerText = '';

    } else {
        result.classList.remove("alert-success");
        result.classList.remove("alert-warning");
        result.innerText = '';
    }

    return rost, massa, result
}

Form1.addEventListener('submit', calchealth);
clearButton1.addEventListener('click', clearInput);