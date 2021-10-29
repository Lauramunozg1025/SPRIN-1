function oculto(){
    oculto = document.getElementById('fieldset')
}



let boton, valorUnidad, valorCompra, descuento, valorDescuento, total, calcular, cantidad, confirmar;

boton.addEventListener('click', () => {
    cantidad = document.getElementById('cantidad').value;
    valorUnidad = parseInt(document.getElementById('valorUnidad').value = (`$${820000}`));
    valorCompra = parseInt(document.getElementById('valorCompra').value = (`$${820000*cantidad}`));

    if ((valorCompra < 1640000) && (valorCompra > 0)){
        descuento = document.getElementById('descuento').value = ('0%');
        valorDescuento = document.getElementById('valorDescuento').value = ('No hay descuento');
        total = document.getElementById('total').value = (`${valorUnidad}`);
    }
    
    else if ((valorCompra >= 1640000) && (valorCompra <= 3280000)){
        descuento = document.getElementById('descuento').value = ('15%');
        valorDescuento = document.getElementById('valorDescuento').value = (`$${(valorUnidad/100)*15}`);
        total = document.getElementById('total').value = (`$${valorUnidad-valorDescuento}`);
    }

    else if ((valorCompra > 3280000) && (valorCompra <= 6560000)){
        descuento = document.getElementById('descuento').value = ('25%');
        valorDescuento = document.getElementById('valorDescuento').value = (`$${(valorUnidad/100)*25}`);
        total = document.getElementById('total').value = (`$${valorUnidad-valorDescuento}`);
    }

    else if ((valorCompra > 6560000) && (valorCompra <= 9840000)){
        descuento = document.getElementById('descuento').value = ('35%');
        valorDescuento = document.getElementById('valorDescuento').value = (`$${(valorUnidad/100)*35}`);
        total = document.getElementById('total').value = (`$${valorUnidad-valorDescuento}`);
    }

    else if (valorCompra < 9840000) {
        descuento = document.getElementById('descuento').value = ('0%');
        valorDescuento = document.getElementById('valorDescuento').value = ('No tiene derecho a descuento');
        total = document.getElementById('total').value = (`${valorUnidad}`);
    }

    else {
        alert('Error');
    }

})