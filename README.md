# Pokédex

Aplicação em React para consultar informações de Pokémon usando a PokeAPI. A interface permite navegar entre os Pokémon por ID, visualizar o sprite oficial e listar seus tipos.

## Funcionalidades

- Busca dinâmica de Pokémon pela API pública da PokeAPI
- Navegação entre Pokémon com os botões de anterior e próximo
- Indicador de carregamento enquanto os dados são consultados
- Exibição do número, nome e tipos do Pokémon
- Layout responsivo com Tailwind CSS

## Tecnologias

- React
- Vite
- Tailwind CSS
- PokeAPI

## Pré-requisitos

Antes de começar, certifique-se de ter instalado:

- Node.js 18 ou superior
- npm

## Instalação

1. Clone o repositório
2. Acesse a pasta do projeto
3. Instale as dependências:

```bash
npm install
```

## Executando o projeto

Inicie o servidor de desenvolvimento:

```bash
npm run dev
```

Depois, abra o endereço informado no terminal no navegador.

## Scripts disponíveis

```bash
npm run dev
npm run build
npm run preview
npm run lint
```

- `npm run dev`: inicia a aplicação em modo de desenvolvimento
- `npm run build`: gera a build de produção
- `npm run preview`: visualiza a build produzida localmente
- `npm run lint`: executa a análise de código com ESLint

## Observações

A aplicação usa a endpoint `https://pokeapi.co/api/v2/pokemon/:id` para carregar os dados do Pokémon selecionado. Caso a requisição falhe, a interface exibe uma mensagem informando que não foi possível carregar o Pokémon.

## Estrutura principal

```text
src/
├── App.jsx
├── main.jsx
├── index.css
└── assets/
```

## Licença

Este projeto foi desenvolvido para fins de estudo e demonstração.
