// Existe uma variável implícita chamada de this que faz referência para o objeto responsável pela sua invocação.

// Exemplo:

const rectangle = {
  x: 10,
  y: 2,
  calculateArea() {
      return this.x * this.y;
  }
};
console.log(rectangle.calculateArea());