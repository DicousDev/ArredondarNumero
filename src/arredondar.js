function arredondar(numero) {

    const umMilhao = 1000000;
    if(numero >= umMilhao) {
        return numero / umMilhao + "kk";
    }
    
    const numeroString = Number(numero).toString();
    const numerosDividido = numeroString.split('.');

    if(maiorOuIgual1000ComDecimal()) {
        const decimalString = '0.' + numerosDividido[1][0];
        const decimalNumber = Number(decimalString);
        const result = (Math.floor(numero) / 1000) + decimalNumber;
        return result + 'k';
    }

    return calcularMenorQueMil();

    function calcularMenorQueMil() {
        return Math.floor(numero) / 1000 + 'k';
    }

    function maiorOuIgual1000ComDecimal() {
        return numerosDividido.length > 1 && numero >= 1000
    }
}

module.exports = arredondar;