# 🐶 Sistema de Controle de Estoque – PetShop

![Status](https://img.shields.io/badge/Status-Concluído-brightgreen)
![Linguagem](https://img.shields.io/badge/TypeScript-3178C6?logo=typescript&logoColor=white)
![Node](https://img.shields.io/badge/Node.js-43853D?logo=node.js&logoColor=white)
![POO](https://img.shields.io/badge/POO-Programação%20Orientada%20a%20Objetos-blue)
![Licença](https://img.shields.io/badge/Licença-Educacional-lightgrey)

Projeto desenvolvido em **TypeScript** como parte de avaliação prática do Bloco 1 da Generation Brasil.

O objetivo é criar um sistema de controle de estoque para uma loja PetShop, utilizando Programação Orientada a Objetos (POO), interface, controller com array interno e um menu interativo no terminal.

---

```mermaid
classDiagram
    class Produto {
        - id: number
        - nome: string
        - preco: number
        - estoque: number
        + visualizar(): void
    }

    class ProdutoPet {
        - tipo: number
        + visualizar(): void
    }

    class ProdutoRepository {
        <<interface>>
        + procurarPorId(id: number): void
        + listarTodos(): void
        + cadastrar(produto: Produto): void
        + atualizar(produto: Produto): void
        + deletar(id: number): void
    }

    class ProdutoController {
        - listaProdutos: Produto[]
        - id: number
        + gerarId(): number
        + procurarPorId(id: number): void
        + listarTodos(): void
        + cadastrar(produto: Produto): void
        + atualizar(produto: Produto): void
        + deletar(id: number): void
        - buscarNoArray(id: number): Produto | null
    }

    Produto <|-- ProdutoPet
    ProdutoRepository <|.. ProdutoController


```

---

## ▶ Como executar o projeto

### 1. Instalar dependências

### 2. Compilar o código TypeScript

### 3. Executar o sistema

---

## Desenvolvido por Jéssica Gizela

Projeto criado para treinamento em:

POO

Estruturas de dados

Arquitetura em camadas

CRUD

TypeScript e Node.js

