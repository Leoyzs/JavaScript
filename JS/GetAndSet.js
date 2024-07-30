class Contador {
    #valor; // Atributo privado

    constructor() {
        this.#valor = 0; // Inicializa o valor com 0
    }

    // Método para obter o valor atual
    getValor() {
        return this.#valor;
    }

    // Método para definir o valor
    setValor(novoValor) {
        if (typeof novoValor === 'number') {
            this.#valor = novoValor;
        } else {
            console.log('O valor deve ser um número.');
        }
    }

    // Método para incrementar o valor em uma unidade
    incrementar() {
        this.#valor += 1;
    }
}

// Exemplo de uso:
const contador = new Contador();
console.log(contador.getValor()); // 0
contador.incrementar();
console.log(contador.getValor()); // 1
contador.setValor(10);
console.log(contador.getValor()); // 10
contador.incrementar();
console.log(contador.getValor()); // 11
