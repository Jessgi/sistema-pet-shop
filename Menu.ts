import readlinesync = require("readline-sync");
import { colors } from './src/util/Colors';
import { ProdutoPet } from './src/model/ProdutoPet';
import { ProdutoController } from "./src/controller/ProdutoController";

export function main() {

    let produtos: ProdutoController = new ProdutoController();

    let opcao, id, tipo, preco, estoque: number;
    let nome: string;

    const categorias = ['Ração', 'Brinquedo', 'Acessório'];

    while (true) {

        console.log(colors.bg.black, colors.fg.yellow,
            "*****************************************************");
        console.log("                                                     ");
        console.log("                   PETSHOP LOVE PET                  ");
        console.log("                                                     ");
        console.log("*****************************************************");
        console.log("                                                     ");
        console.log("        1 - Cadastrar Produto                        ");
        console.log("        2 - Listar todos os Produtos                 ");
        console.log("        3 - Buscar Produto por ID                    ");
        console.log("        4 - Atualizar Produto                        ");
        console.log("        5 - Remover Produto                          ");
        console.log("        6 - Sair                                     ");
        console.log("                                                     ");
        console.log("*****************************************************");
        console.log("                                                     ", colors.reset);

        console.log("Entre com a opção desejada: ");
        opcao = readlinesync.questionInt("");

        if (opcao === 6) {
            console.log(colors.fg.greenstrong, "\nObrigado por usar o sistema do Petshop!");
            sobre();
            console.log(colors.reset, "");
            process.exit(0);
        }

        switch (opcao) {

            case 1:
                console.log(colors.fg.whitestrong, "\nCadastrar Produto\n", colors.reset);

                console.log("Nome: ");
                nome = readlinesync.question("");

                console.log("\nCategoria: ");
                tipo = readlinesync.keyInSelect(categorias, "", { cancel: false }) + 1;

                console.log("Preço (R$): ");
                preco = readlinesync.questionFloat("");

                console.log("Quantidade em estoque: ");
                estoque = readlinesync.questionInt("");

                produtos.cadastrar(
                    new ProdutoPet(produtos.gerarId(), nome, preco, estoque, tipo)
                );
                break;

            case 2:
                console.log(colors.fg.whitestrong, "\nListar todos os Produtos\n", colors.reset);
                produtos.listarTodos();
                keyPress();
                break;

            case 3:
                console.log(colors.fg.whitestrong, "\nBuscar Produto por ID\n", colors.reset);
                console.log("Digite o ID: ");
                id = readlinesync.questionInt("");
                produtos.procurarPorId(id);
                keyPress();
                break;

            case 4:
                console.log(colors.fg.whitestrong, "\nAtualizar Produto\n", colors.reset);

                console.log("Digite o ID do produto: ");
                id = readlinesync.questionInt("");

                let produto = produtos.buscarNoArray(id);

                if (produto != null) {
                    console.log("Novo nome: ");
                    nome = readlinesync.question("");

                    console.log("Novo preço: ");
                    preco = readlinesync.questionFloat("");

                    console.log("Novo estoque: ");
                    estoque = readlinesync.questionInt("");

                    tipo = produto.tipo;

                    produtos.atualizar(
                        new ProdutoPet(id, nome, preco, estoque, tipo)
                    );
                } else {
                    console.log(colors.fg.red + "\nProduto não encontrado!", colors.reset);
                }

                keyPress();
                break;

            case 5:
                console.log(colors.fg.whitestrong, "\nRemover Produto\n", colors.reset);

                console.log("Digite o ID: ");
                id = readlinesync.questionInt("");

                produtos.deletar(id);

                keyPress();
                break;

            default:
                console.log(colors.fg.red, "\nOpção inválida!\n", colors.reset);
                keyPress();
                break;
        }
    }
}

function keyPress(): void {
    console.log("\n\nPressione ENTER para continuar...");
    readlinesync.keyInPause();
}

function sobre(): void {
    console.log("*****************************************************");
    console.log("PETSHOP LOVE PET");
    console.log("Desenvolvido em TypeScript");
    console.log("*****************************************************");
}

main();
