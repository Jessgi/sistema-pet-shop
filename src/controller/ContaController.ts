import { colors } from "../util/Colors";
import { Conta } from "../model/Produto";
import { ContaRepository } from "../repository/ContaRepository";

export class ContaController implements ContaRepository {
    private listaContas: Array<Conta> = new Array<Conta>();
    private saldo: number = 0; // ✅ Declare a propriedade
    public numero: number = 0;

    public procurarPorNumero(numero: number): void{
        let buscaConta = this.buscarnoArray(numero);
        if (buscaConta) {
            buscaConta.visualizar();
        } else {
            console.log(colors.fg.red + "\nA conta número " + numero 
                + " não foi encontrada!" + colors.reset);
    };
    }

    public obterSaldo(): number {
        return this.saldo;
    }

    listarTodas(): void {
        for (let conta of this.listaContas) {
            conta.visualizar();
        }
    }
    cadastrar(conta: Conta): void {
        this.listaContas.push(conta);
        console.log(
            colors.fg.green + `\nA conta número ${conta.numero} foi criada com sucesso!` + colors.reset
        );
    }
    atualizar(conta: Conta): void {
        let buscaConta = this.buscarnoArray(conta.numero);

        if (buscaConta != null) {
            this.listaContas[this.listaContas.indexOf(buscaConta)] = conta;
            console.log(colors.fg.green + `\nA conta número ${conta.numero} foi atualizada com sucesso!` + colors.reset);
        } else {
            console.log(colors.fg.red + "\nA conta número: " + conta.numero + 
                "Não foi encontrada!", colors.reset);
        }
    }
    deletar(numero: number): void {
        let buscaConta = this.buscarnoArray(numero);
        
        if (buscaConta != null) {
            this.listaContas.splice(this.listaContas.indexOf(buscaConta), 1);
            console.log(colors.fg.green + `\nA conta número ${numero} foi apagada com sucesso!` + colors.reset);
        } else {
            console.log(colors.fg.red + "\nA conta número: " + numero + 
                "Não foi encontrada!", colors.reset);
        }
    }
    sacar(numero: number, valor: number): void {
        let conta = this.buscarnoArray(numero);

        if (conta != null) {
            if (conta.sacar(valor) == true) {
                console.log(colors.fg.green, 
                     "\nO Saque na conta número: " + numero + " Foi efetuado com sucesso!", colors.reset);
            }else 
            console.log(colors.fg.red,"\nA Conta número: " + numero + " não foi encontrada!", colors.reset);
        }
    }
    depositar(numero: number, valor: number): void {
       let conta = this.buscarnoArray(numero);

       if (conta != null) {
           conta.depositar(valor);
           console.log(colors.fg.green, 
                "\nO Depósito na conta número: " + numero + " Foi efetuado com sucesso!", colors.reset);
       } else {
           console.log(colors.fg.red,"\nA Conta número: " + numero + " não foi encontrada!", colors.reset);
       }
    }
    transferir(numeroOrigem: number, numeroDestino: number, valor: number): void {
        let contaOrigem = this.buscarnoArray(numeroOrigem);
        let contaDestino = this.buscarnoArray(numeroDestino);

        if (contaOrigem != null && contaDestino != null) {
            if (contaOrigem.sacar(valor) == true) {
                contaDestino.depositar(valor);
                console.log(colors.fg.green, 
                    "\nA Transferência da conta número: " + numeroOrigem + 
                    " para a conta número: " + numeroDestino + " Foi efetuada com sucesso!", colors.reset);
            }
        } else {
            console.log(colors.fg.red,"\nA Conta número: " + numeroOrigem + " ou a Conta número: " + 
            numeroDestino + " não foi encontrada!", colors.reset);
        }
    }

    public gerarNumero(): number {
        return ++this.numero;
    }

    public buscarnoArray(numero: number): Conta | null {
        for (let conta of this.listaContas) {
            if (conta.numero === numero) {
                return conta;
            }
}
        return null;
    }
}


