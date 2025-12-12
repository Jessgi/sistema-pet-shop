import { colors } from "../util/Colors";
import { Produto } from "../model/Produto";
import { ProdutoRepository } from "../repository/ProdutoRepository";

export class ProdutoController implements ProdutoRepository {

    private listaProdutos: Array<Produto> = new Array<Produto>();
    public id: number = 0;  

   

    public procurarPorId(id: number): void {
        let produto = this.buscarNoArray(id);

        if (produto != null) {
            produto.visualizar();
        } else {
            console.log(colors.fg.red + 
                "\nO produto ID " + id + " não foi encontrado!" + 
                colors.reset);
        }
    }

    public listarTodos(): void {
        for (let produto of this.listaProdutos) {
            produto.visualizar();
        }
    }

    public cadastrar(produto: Produto): void {
        this.listaProdutos.push(produto);
        console.log(colors.fg.green + 
            `\nO produto ID ${produto.id} foi cadastrado com sucesso!` + 
            colors.reset);
    }

    public atualizar(produto: Produto): void {
        let buscaProduto = this.buscarNoArray(produto.id);

        if (buscaProduto != null) {
            this.listaProdutos[this.listaProdutos.indexOf(buscaProduto)] = produto;
            console.log(colors.fg.green + 
                `\nO produto ID ${produto.id} foi atualizado com sucesso!` + 
                colors.reset);
        } else {
            console.log(colors.fg.red + 
                "\nO produto ID " + produto.id + " não foi encontrado!" + 
                colors.reset);
        }
    }

    public deletar(id: number): void {
        let buscaProduto = this.buscarNoArray(id);

        if (buscaProduto != null) {
            this.listaProdutos.splice(this.listaProdutos.indexOf(buscaProduto), 1);
            console.log(colors.fg.green + 
                `\nO produto ID ${id} foi removido com sucesso!` + 
                colors.reset);
        } else {
            console.log(colors.fg.red + 
                "\nO produto ID " + id + " não foi encontrado!" + 
                colors.reset);
        }
    }

    

    public gerarId(): number {
        return ++this.id;
    }

    public buscarNoArray(id: number): Produto | null {
        for (let produto of this.listaProdutos) {
            if (produto.id === id) {
                return produto;
            }
        }
        return null;
    }
}
