import { Produto } from "./Produto";

export class ProdutoPet extends Produto {

    constructor(id: number, nome: string, preco: number, estoque: number, tipo: number) {
        super(id, nome, preco, estoque);
        this.tipo = tipo; 
    }

    public visualizar(): void {
        super.visualizar();

        let categoria = "";

        switch (this.tipo) { 
            case 1:
                categoria = "Ração";
                break;
            case 2:
                categoria = "Brinquedo";
                break;
            case 3:
                categoria = "Acessório";
                break;
        }

        console.log("Categoria: " + categoria);
    }
}
