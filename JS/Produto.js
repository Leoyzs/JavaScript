class Produto {
    #nome;  // Atributo privado para o nome
    #preco; // Atributo privado para o preço

    constructor(nome, preco) {
        this.#nome = nome;
        this.setPreco(preco); // Inicializa o preço usando o método setPreco
    }

    // Método para obter o nome do produto
    getNome() {
        return this.#nome;
    }

    // Método para obter o preço do produto
    getPreco() {
        return this.#preco;
    }

    // Método para definir o preço com validação
    setPreco(novoPreco) {
        if (novoPreco >= 0) {
            this.#preco = novoPreco;
        } else {
            console.log('O preço não pode ser negativo.');
        }
    }
}

// Exemplo de uso:
const produto = new Produto('Camiseta', 29.99);
console.log(produto.getNome()); // Camiseta
console.log(produto.getPreco()); // 29.99
produto.setPreco(34.99);
console.log(produto.getPreco()); // 34.99
produto.setPreco(-10); // Exibe: O preço não pode ser negativo.
console.log(produto.getPreco()); // 34.99 (preço não alterado)
