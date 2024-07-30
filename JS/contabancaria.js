class ContaBancaria {
    #saldo; // Atributo privado para o saldo
    #titular; // Atributo privado para o titular

    constructor(titular, saldoInicial = 0) {
        this.#titular = titular;
        this.#saldo = saldoInicial;
    }

    // Método para obter o saldo atual
    getSaldo() {
        return this.#saldo;
    }

    // Método para definir o titular
    setTitular(novoTitular) {
        this.#titular = novoTitular;
    }

    // Método para realizar um depósito
    depositar(valor) {
        if (valor > 0) {
            this.#saldo += valor;
        } else {
            console.log('O valor do depósito deve ser positivo.');
        }
    }

    // Método para realizar um saque
    sacar(valor) {
        if (valor > 0 && valor <= this.#saldo) {
            this.#saldo -= valor;
        } else {
            console.log('Saque inválido. Verifique o valor e o saldo disponível.');
        }
    }
}

// Exemplo de uso:
const conta = new ContaBancaria('João', 100);
console.log(conta.getSaldo()); // 100
conta.depositar(50);
console.log(conta.getSaldo()); // 150
conta.sacar(30);
console.log(conta.getSaldo()); // 120
conta.setTitular('Maria');
console.log(conta.getSaldo()); // 120
