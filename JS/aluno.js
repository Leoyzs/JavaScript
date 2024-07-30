class Aluno {
    #nome; // Atributo privado para o nome
    #nota; // Atributo privado para a nota

    constructor(nome, nota) {
        this.#nome = nome;
        this.setNota(nota); // Inicializa a nota usando o método setNota
    }

    // Método para obter o nome do aluno
    getNome() {
        return this.#nome;
    }

    // Método para obter a nota do aluno
    getNota() {
        return this.#nota;
    }

    // Método para definir a nota com validação
    setNota(novaNota) {
        if (novaNota >= 0 && novaNota <= 10) {
            this.#nota = novaNota;
        } else {
            console.log('A nota deve estar entre 0 e 10.');
        }
    }
}

// Exemplo de uso:
const aluno = new Aluno('Pedro', 8);
console.log(aluno.getNome()); // Pedro
console.log(aluno.getNota()); // 8
aluno.setNota(9);
console.log(aluno.getNota()); // 9
aluno.setNota(11); // Exibe: A nota deve estar entre 0 e 10.
console.log(aluno.getNota()); // 9 (nota não alterada)
