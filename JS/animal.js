// Define a classe Animal
class Animal {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}

// Define a classe Dog que herda de Animal
class Dog extends Animal {
    constructor(name, age, breed) {
        super(name, age); // Chama o construtor da classe base (Animal)
        this.breed = breed;
    }
}

// Cria um objeto dog
const dog = new Dog('Rex', 5, 'Labrador');

// Mostra as propriedades de dog no console
console.log(`Nome: ${dog.name}`);   // Nome: Rex
console.log(`Idade: ${dog.age}`);   // Idade: 5
console.log(`Raça: ${dog.breed}`);  // Raça: Labrador
