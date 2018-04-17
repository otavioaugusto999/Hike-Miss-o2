document.getElementById('calculate-button').onclick = function(){

//Get numbers inside the input elements
let elem1 = document.getElementById('elem-1');
let elem2 = document.getElementById('elem-2');

let val1 = parseInt(elem1.value);
let val2 = parseInt(elem2.value);


//radio buttons

let choice = document.querySelector('input[name="operation"]:checked');
let operation = choice.value;

let operationResult = getResult(val1, val2, operation);

let resultElement = document.getElementById('result');
resultElement.innerHTML = operationResult;

}

function getResult(val1, val2, operation) {
	if (isNaN(val1&&val2)) {
		return alert('Digite valores nas duas caixas');
	} else if (operation==='+') {
		return val1 + val2;
	}else if (operation==='-') {
		return val1 - val2;
	} else if (operation ==='*') {
		return val1 * val2;
	} else if (operation === '/') {
		return val1 / val2;

	}
}



	







