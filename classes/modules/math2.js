/* 
Math é um métdo global que contém constantes matemáticas e métodos
para a realização de operações envolvendo números
*/
// abs: converte o sinal do número para positivo
console.log(Math.abs(10));
console.log(Math.abs(-10));
// ceil: arrendoda o número para cima
console.log(Math.ceil(1.1));
// floor: arrendada o número para baixo
console.log(Math.floor(9.9));
console.log(Math.floor(-9.9));
// round: arredonda o número para cima se a parte decimal for de 5 a 9, e para baixo se for de 0 a 4
console.log(Math.round(-4.5));
// sign: retorna 1 se o número for positivo e -1 se for negativo
console.log(Math.sign(5))
// trunc: elimina a parte decimal do número tornando-o um inteiro
console.log(Math.trunc(8.6));

console.log(Math.E,  Math.LN10, Math.LN2, Math.LOG10E, Math.PI, Math.SQRT1_2, Math.SQRT2);

// cálcular a raiz cúbica:
console.log(Math.cbrt(8));
// cálculo da hipotenusa:
console.log(Math.hypot(3, 4));
// potência: 2 elevado a dez
console.log(Math.pow(2, 10));

// min: retorna o menor número passado como paramêtro
console.log(Math.min(1, 2, 3, 4, 5, 6));
// max: retorna o maior número passado como paramêtro
console.log(Math.max(1, 2, 3, 4, 5, 6));
// random: retorna um número randômico entre 0 e 1, não incluindo o 1
console.log(Math.random(1000));

const PI = 3.141592;
(function pow(base, exponential) {
    if (exponential === 0) return 1;
    return console.log(base * pow(base, exponential - 1));
})();