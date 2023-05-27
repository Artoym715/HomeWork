
const Form = document.getElementById('formName');
const clearButton = document.getElementById('clear');

function clearInput2() {
	let name = document.getElementById("name").value = '';
	let resultName = document.getElementById("resultName");

	if (resultName.classList.contains("alert-danger")) {

		resultName.classList.remove("alert-danger");
		resultName.innerText = '';

	} else {
		resultName.classList.remove("alert-success");
		resultName.innerText = '';
	}

}
function myName(event) {
	event.preventDefault();
	let name = document.getElementById("name").value;
	let resultName = document.getElementById("resultName")
	let str;

	if (name != '') {
		str = "Добро пожаловать " + name + "!";
		resultName.classList.remove("alert-danger");
		resultName.classList.add("alert-success");
	} else {
		str = "Вы не ввели ваше имя!"
		resultName.classList.remove("alert-success");
		resultName.classList.add("alert-danger");
	}


	document.getElementById("resultName").innerText = str;
}


Form.addEventListener('submit', myName);
clearButton.addEventListener('click', clearInput2);
