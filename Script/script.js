let boton, valorUnidad, valorCompra, descuento, valorDescuento, total, calcular, cantidad, confirmar;

function Resta(num1, num2) {
    let resta = num1 - num2;
    return resta;
}

function Multiplicacion(num1, num2) {
    let descuento = (num1 / 100) * num2;
    return descuento;
}

function Valor(num1, num2) {
    let multiplicacion = num1*num2;
}

boton = document.getElementById('calcular2');
boton.addEventListener('click', () => {


    cantidad = document.getElementById('cantidad').value;
    /*document.getElementById('valorUnidad').value= (cantidad+3)*/
    valorUnidad = 820000
    document.getElementById('valorUnidad').value = `$ 820000`;
    valorCompra = document.getElementById('valorCompra').value = (`$ `, 820000 * cantidad)
    total = valorCompra - valorDescuento

    if ((valorCompra < 1640000) && (valorCompra > 0)) {
        descuento = document.getElementById('descuento').value = ('0%');
        valorDescuento = document.getElementById('valorDescuento').value = ('No hay descuento');
        total = document.getElementById('total').value = (`${valorCompra}`);

    } else if ((valorCompra >= 1640000) && (valorCompra <= 3280000)) {
        descuento = document.getElementById('descuento').value = ('15%');
        valorDescuento = document.getElementById('valorDescuento').value = Multiplicacion(valorCompra, 15);
        total = document.getElementById('total').value = Resta(valorCompra, valorDescuento);

    } else if ((valorCompra > 3280000) && (valorCompra <= 6560000)) {
        descuento = document.getElementById('descuento').value = ('25%');
        valorDescuento = document.getElementById('valorDescuento').value = Multiplicacion(valorCompra, 25);
        total = document.getElementById('total').value = Resta(valorCompra, valorDescuento);

    } else if ((valorCompra > 6560000) && (valorCompra <= 9840000)) {
        descuento = document.getElementById('descuento').value = ('35%');
        valorDescuento = document.getElementById('valorDescuento').value = Multiplicacion(valorCompra, 35);
        total = document.getElementById('total').value = Resta(valorCompra, valorDescuento);

    } else {
        descuento = document.getElementById('descuento').value = ('0%');
        valorDescuento = document.getElementById('valorDescuento').value = ("No hay descuento");
        total = document.getElementById('total').value = (`${valorCompra}`);
    }

})

confirmar = document.getElementById('btnConfirmar');

confirmar.addEventListener('click', () =>{
    window.alert("Su pedido fue realizado, gracias por su compra");
})