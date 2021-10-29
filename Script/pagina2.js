let valorUnidad, valorCompra, descuento, valorDescuento, cantidad, total, confirmar;

cantidad = document.querySelectorAll('#cantidad').value;

//Creamos las funciones para hacer las operaciones necesarias
function Resta(num1, num2) {
    let resta = num1 - num2;
    return resta;
}


function Multiplicacion(num1, num2) {
    let descuento = (num1 / 100) * num2;
    return descuento;
}

//Le indicamos que al hacer click en el boton realice las operaciones necesrias para saber el total de la compra

// relacionamos los input con las variables
valorUnidad = 820000;
document.getElementById('valorUnidad').value = (`${valorUnidad}`);
valorCompra = document.getElementById('valorCompra').value = (valorUnidad * cantidad);

//Realizamos las operaciones logicas para saber el total del decuento y el total de la compra

if ((valorCompra < 1640000) && (valorCompra > 0)) {
    descuento = document.getElementById('descuento').value = Multiplicacion(valorCompra, 0);
    valorDescuento = document.getElementById('valorDescuento').value = ('No hay descuento');
    total = document.getElementById('total').value = valorCompra;

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
    valorDescuento = document.getElementById('valorDescuento').value = ('No hay descuento');
    total = document.getElementById('total').value = valorCompra;
}