class Pessoa {
    #nome;  // Atributo privado para o nome
    #idade; // Atributo privado para a idade

    constructor(nome, idade) {
        this.#nome = nome;
        this.setIdade(idade); // Inicializa a idade usando o método setIdade
    }

    // Método para obter o nome da pessoa
    getNome() {
        return this.#nome;
    }

    // Método para obter a idade da pessoa
    getIdade() {
        return this.#idade;
    }

    // Método para definir a idade com validação
    setIdade(novaIdade) {
        if (novaIdade >= 0) {
            this.#idade = novaIdade;
        } else {
            console.log('A idade deve ser um número positivo.');
        }
    }
}

// Exemplo de uso:
const pessoa = new Pessoa('Ana', 25);
console.log(pessoa.getNome()); // Ana
console.log(pessoa.getIdade()); // 25
pessoa.setIdade(30);
console.log(pessoa.getIdade()); // 30
pessoa.setIdade(-5); // Exibe: A idade deve ser um número positivo.
console.log(pessoa.getIdade()); // 30 (idade não alterada)
