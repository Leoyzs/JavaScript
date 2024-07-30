// Define a classe Person
class Person {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    // Método para obter o nome completo
    fullName() {
        return `${this.firstName} ${this.lastName}`;
    }
}

// Define a classe Student que herda de Person
class Student extends Person {
    constructor(firstName, lastName, grade) {
        super(firstName, lastName); // Chama o construtor da classe base (Person)
        this.grade = grade; // Adiciona a propriedade grade
    }
}

// Cria um objeto student
const student = new Student('João', 'Silva', 8.5);

// Mostra o nome completo e a nota do estudante no console
console.log(`Full Name: ${student.fullName()}`); // Full Name: João Silva
console.log(`Grade: ${student.grade}`); // Grade: 8.5
