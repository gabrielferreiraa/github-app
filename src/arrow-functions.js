'use strict';

/* Função normal */
function sum (x, y) {
  return x + y;
}

/* Arrow function com um retorno e mais de um parametro */
var sumArrow = (x, y) => x + y;

/* Arrow function com um retorno e apenas 1 parametro posso omitir os parenteses */
var sumArrowOne = x => sumArrow(2, 5) + x;

console.log(sum(2,5));
console.log(sumArrow(5,5));
console.log(sumArrowOne(10));
