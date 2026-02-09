// Estructura switch
// Permite evaluar una expresión y ejecutar diferentes bloques de código, según el caso que coincida.

const paymentMethod = 'bitCoi';

switch (paymentMethod) {
    case 'card':
        console.log('Pagaste con tarjeta');
        break;
    case 'bitCoin':
        console.log('Pagaste con BitCoin');
        break;
    case 'debitCard':
        console.log('Pagaste con tarjeta débito');
        break;
    case 'creditCard':
        console.log('Pagaste con tarjeta crédito');
        break;

    default:
        console.log('Método de pago No válido');
        break;
}

//==================================================
