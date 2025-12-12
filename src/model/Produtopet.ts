import { Produto } from "./Produto";

export class ProdutoPet extends Produto {

    private _tipo: number;

    constructor(id: number, nome: string, preco: number, estoque: number, tipo: number) {
        super(id, nome, preco, estoque);
        this._tipo = tipo;
    }

    public get tipo() {
        return this._tipo;
    }

    public set tipo(tipo: number) {
        this._tipo = tipo;
    }

    public visualizar(): void {
        super.visualizar();

        let categoria = "";

        switch (this._tipo) {
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
