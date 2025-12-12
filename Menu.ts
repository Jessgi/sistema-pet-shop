import readlinesync = require("readline-sync");
import { colors } from './src/util/Colors';
import { ProdutoController } from "./src/controller/ProdutoController";
import { Produto } from "./src/model/Produto";
import { ProdutoPet } from "./src/model/ProdutoPet";
export function main() {

    let produtos: ProdutoController = new ProdutoController();

    let opcao, id, tipo, preco, estoque: number;
    let nome: string;

    
    const tipoProdutos = ['Ração', 'Brinquedo', 'Acessório'];

    while (true) {

        console.log(colors.bg.black, colors.fg.yellow,
            "*****************************************************");
        console.log("                                                     ");
        console.log("                  PETSHOP LOVE PET                    ");
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
                console.log(colors.fg.whitestrong, "\n\nCadastrar Produto\n\n", colors.reset);

                console.log("Digite o nome do Produto: ");
                nome = readlinesync.question("");

                console.log("\nSelecione o tipo do Produto: ");
                tipo = readlinesync.keyInSelect(tipoProdutos, "", { cancel: false }) + 1;

                console.log("Digite o preço do Produto (R$): ");
                preco = readlinesync.questionFloat("");

                console.log("Digite a quantidade em estoque: ");
                estoque = readlinesync.questionInt("");

                produtos.cadastrar(
                    new ProdutoPet(
                        produtos.gerarId(), 
                        nome,
                        preco,
                        estoque,
                        tipo
                    )
                );

                break;

            case 2:
                console.log(colors.fg.whitestrong, "\n\nListar todos os Produtos\n\n", colors.reset);
                produtos.listarTodos();
                keyPress();
                break;

            case 3:
                console.log(colors.fg.whitestrong, "\n\nBuscar Produto por ID\n\n", colors.reset);

                console.log("Digite o ID do Produto: ");
                id = readlinesync.questionInt("");

                produtos.procurarPorId(id);

                keyPress();
                break;

            case 4:
                console.log(colors.fg.whitestrong, "\n\nAtualizar Produto\n\n", colors.reset);

                console.log("Digite o ID do Produto: ");
                id = readlinesync.questionInt("");

                let produto = produtos.buscarNoArray(id);

                if (produto != null) {
                    console.log("Digite o novo nome: ");
                    nome = readlinesync.question("");

                    console.log("Digite o novo preço (R$): ");
                    preco = readlinesync.questionFloat("");

                    console.log("Digite a nova quantidade em estoque: ");
                    estoque = readlinesync.questionInt("");

                    tipo = produto.tipo;

                    produtos.atualizar(
                        new ProdutoPet(
                            id,
                            nome,
                            preco,
                            estoque,
                            tipo
                        )
                    );

                } else {
                    console.log(colors.fg.red + "\nO produto ID " + id + " não foi encontrado!", colors.reset);
                }

                keyPress();
                break;

            case 5:
                console.log(colors.fg.whitestrong, "\n\nRemover Produto\n\n", colors.reset);

                console.log("Digite o ID do Produto: ");
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
    console.log("\n\nPressione uma tecla para continuar...\n\n");
    readlinesync.keyInPause();
}

function sobre(): void {
    console.log("*****************************************************");
    console.log("PETSHOP LOVE PET");
    console.log("Sistema desenvolvido em TypeScript");
    console.log("Versão 1.0");
    console.log("*****************************************************");
}

main();
