// Define a classe Animal
class Animal {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    // Método que retorna um som genérico de animal
    speak() {
        return 'Animal sound';
    }
}

// Define a classe Dog que herda de Animal
class Dog extends Animal {
    constructor(name, age, breed) {
        super(name, age); // Chama o construtor da classe base (Animal)
        this.breed = breed;
    }

    // Sobrescreve o método speak para retornar um som específico de cachorro
    speak() {
        return 'Woof';
    }
}

// Cria um objeto dog
const dog = new Dog('Rex', 5, 'Labrador');

// Mostra o resultado de dog.speak() no console
console.log(dog.speak()); // Woof
