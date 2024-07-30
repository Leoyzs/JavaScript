// Define a classe Rectangle
class Rectangle {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }

    // Método para calcular a área do retângulo
    getArea() {
        return this.width * this.height;
    }
}

// Define a classe Square que herda de Rectangle
class Square extends Rectangle {
    constructor(side) {
        super(side, side); // Chama o construtor da classe base (Rectangle) com largura e altura iguais
    }
}

// Cria um objeto square
const square = new Square(5);

// Mostra a área de square no console
console.log(square.getArea()); // 25
