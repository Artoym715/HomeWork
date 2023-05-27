const Form2 = document.getElementById('formChat');
const clearButton2 = document.getElementById('clear2');

function send(event) {
	event.preventDefault();
	let massage = document.getElementById("massage").value;
	console.log(massage);
}

function clearSend() {
	let massage = document.getElementById("massage").value = '';
}

Form2.addEventListener('submit', send);
clearButton2.addEventListener('click', clearSend);
