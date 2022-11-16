(() => {

	const amountS = document.getElementById('amountS');
	const amountN = document.getElementById('amountN');
	const amountIVA = document.getElementById('amountIVA');
	const percentage = document.getElementById('percentageIVA');

	const calculate = (target) => {
		let iva, res;

		// Calcula el IVA y se lo suma a la cantidad.
		if (target.id == 'amountS' || target.id == 'percentageIVA') {
			console.log('output');
			iva = parseFloat(amountS.value) * (parseFloat('0.' + percentage.value));
			res = parseFloat(amountS.value) + iva;
			amountN.value = isNaN(res) ? '' : res.toFixed(2);
		}

		// Calcula el IVA y se lo resta a la cantidad.
		else if (target.id == 'amountN') {
			res = parseFloat(amountN.value) / (parseFloat('1.' + percentage.value));
			iva = parseFloat(amountN.value) - res;
			amountS.value = isNaN(res) ? '' : res.toFixed(2);
		}

		amountIVA.textContent = isNaN(iva) ? 0 : iva.toFixed(2);
	}
	
	
	document.querySelector('.calIVA').addEventListener('input', (e) => {
		// Impide poder agregar mas de dos cifras en el porcentaje del iva. 
		let v = percentage.value;
		percentage.value = v.length > 2 ? v.slice(0,2): v;

		calculate(e.target);
	});
	
	document.getElementById('iconx').addEventListener('click', () => {
		amountS.value = amountN.value = '';
		amountIVA.textContent = 0;
	});
	
})();