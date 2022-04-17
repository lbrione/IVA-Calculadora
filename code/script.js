// Obtencion de elementos html.
const inputAmount = document.getElementById('amountInput');
const inputIVA = document.getElementById('inputIVA');
const ivaAmount = document.getElementById('ivaAmount');
const totalResult = document.getElementById('totalResult');



// Funcion del icono borrar.
document.getElementById('iconDelete').addEventListener('click', () => {
	amountInput.value = '';
	calculateIVA();
})

// Funcion del checkbox.
document.getElementById('checkbox').addEventListener('click', () => { calculateIVA(); })



// Evento de teclado de los inputs.
inputAmount.addEventListener('keyup', calculateIVA);
inputIVA.addEventListener('keyup', calculateIVA);



// Funcion que hace el calulo del iva.
// De una cantidad sin iva con el checkbox desactivado.
// De una cantidad con iva con el checkbox activado.
function calculateIVA () {

	// obtendo la cantidad en el input catidad.
	let amount = parseFloat( inputAmount.value );
	let iva, res;

	// Segun el checkbox activo o inactivo hace un calculo.
	if ( checkbox.checked ) {
		inputAmount.placeholder = 'Cantidad (con iva)';
		res = amount / (parseFloat( '1.' + inputIVA.value ));
		iva = amount - res;
	} 
	else { 
		inputAmount.placeholder = 'Cantidad (sin iva)';
		iva = amount * (parseFloat( '0.' + inputIVA.value ));
		res = amount + iva;
	}

	// Muestra los resultados en el formulario.
	ivaAmount.textContent = iva.toFixed(2);
	totalResult.textContent = res.toFixed(2);

	// Impide escribir mas de dos numero en el input iva.
	if ( inputIVA.value.length > 2 ) { inputIVA.value = inputIVA.value.slice(0,2) }
	
	// Si no hay una cantidad coloca en los resultados 0 para impedir mostar dato NAN.
	if ( inputAmount.value == '' || inputIVA.value == '') { 
		ivaAmount.textContent = 0; 
		totalResult.textContent = 0;
	}
}