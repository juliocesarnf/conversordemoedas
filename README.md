# Conversor de Moedas

Este projeto é um conversor de moedas em JavaScript que permite ao usuário selecionar moedas a partir de sugestões automáticas baseadas em um arquivo JSON e converter valores utilizando a API Exchange Rate API.

## 📌 Funcionalidades
- Sugestão automática de moedas ao digitar a sigla, o nome ou o país da moeda.
- Conversão em tempo real com base nas taxas de câmbio fornecidas pela API Exchange Rate API.
- Interface amigável e intuitiva.
- Armazenamento de moedas já utilizadas na sessão.

## 🛠 Tecnologias Utilizadas
- HTML, CSS e JavaScript
- Fetch API para requisições HTTP
- JSON para armazenamento das moedas disponíveis

## 📂 Estrutura do Projeto
```
📁 conversor-moedas
│── 📄 index.html  # Interface do usuário
│── 📄 style.css   # Estilos da página
│── 📄 script.js   # Lógica do conversor
│── 📄 moedas.json # Lista de moedas disponíveis
```

## 🔧 Como Usar
1. Clone este repositório:
   ```sh
   git clone https://github.com/juliocesarnf/conversordemoedas.git
   ```
2. Altere a chave da api em `script.js` para colocar a sua chave api.
3. Abra o arquivo `index.html` no navegador.
4. Digite o valor, as siglas das moedas desejadas nos inputs ou selecione uma das sugestões.
5. Clique em "Converter" para obter o valor convertido.

## 🔗 API Utilizada
O projeto utiliza a API [Exchange Rate API](https://www.exchangerate-api.com/) para obter as taxas de câmbio mais recentes.

## Contato

Julio Cesar Martins de Souza - julio2001nf@gmail.com

Link do Projeto: https://github.com/juliocesarnf/conversordemoedas

