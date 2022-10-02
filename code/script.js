(() => {

	const amountS = document.getElementById('amountS');
	const amountN = document.getElementById('amountN');
	const amountIva = document.getElementById('amountIva');
	const percIva = document.getElementById('percIva');
	let res, iva;

	const calculate = (t) => {

		// Calcula el IVA y se lo suma a la cantidad.
		if (t.id == 'amountS' || t.id == 'percIva') {
			iva = parseFloat(amountS.value) * (parseFloat('0.' + percIva.value));
			res = parseFloat(amountS.value) + iva;
			amountN.value = isNaN(res) ? '':res.toFixed(2);
		}

		// Calcula el IVA y se lo resta a la cantidad.
		else if (t.id == 'amountN') {
			res = parseFloat(amountN.value) / (parseFloat('1.' + percIva.value));
			iva = parseFloat(amountN.value) - res;
			amountS.value = isNaN(res) ? '': res.toFixed(2);
		}

		amountIva.textContent = isNaN(iva) ? 0: iva.toFixed(2);
	}
	
	document.getElementById('btnDelete').addEventListener('click', () => {
		amountS.value = amountN.value = '';
		amountIva.textContent = 0;
	});

	document.addEventListener('keyup', (e) => {
		let v = percIva.value; 
		percIva.value = v.length > 2 ? v.slice(0,2): v;
		calculate(e.target);
	});
	
})();