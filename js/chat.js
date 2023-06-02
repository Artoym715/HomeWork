const Form2 = document.getElementById('formChat');
const clearButton2 = document.getElementById('clear2');

function send(event) {
	event.preventDefault();
	let massage = document.getElementById("massage").value;
	(async () => {
		var response = await fetch('chat.php?message=' + message);
		var answer = await response.text();

	}
	)();
}

function clearSend() {
	let massage = document.getElementById("massage").value = '';
}

Form2.addEventListener('submit', send);
clearButton2.addEventListener('click', clearSend);

function get() {
	(async () => {
		var response = await fetch('chat.php');
		var answer = await response.text();
		document.getElementById('chat').innerText = answer;
	}
	)();
}

get();

setInterval(get, 2000);