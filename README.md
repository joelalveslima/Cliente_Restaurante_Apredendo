# Desafio Restaurante

Este projeto é um aplicativo simples desenvolvido em React Native, com o objetivo de simular o controle de clientes em um restaurante. O código principal está no arquivo `App.js`.

## Pontos abordados no App.js

### 1. Controle de Estado com useState
- Utiliza o hook `useState` para armazenar e atualizar o número de clientes presentes no restaurante.

### 2. Função de Adicionar Cliente
- A função `Adicionar` incrementa o número de clientes.
- Limita o máximo de clientes a 10.
- Exibe um alerta (`Alert.alert`) quando o restaurante atinge a lotação máxima.

### 3. Função de Remover Cliente
- A função `Remover` decrementa o número de clientes.
- Limita o mínimo de clientes a 0.
- Exibe um alerta quando o restaurante fica vazio.

### 4. Interface do Usuário
- Mostra o número atual de clientes.
- Dois botões: "Adicionar" (verde) e "Remover" (vermelho).
- Os botões ficam desabilitados e mudam de cor quando atingem os limites (0 ou 10 clientes).

### 5. Estilização
- Utiliza o `StyleSheet` do React Native para estilizar os componentes, garantindo uma interface agradável e responsiva.

## Como executar

1. Instale as dependências:
   ```sh
   npm install
   ```

2. Execute o projeto:
   ```sh
   npm start
   ```
   Ou utilize os comandos do Expo para rodar no emulador ou dispositivo físico.

## Tecnologias utilizadas

- React Native
- Expo
- JavaScript

## Objetivo

O objetivo deste projeto é praticar conceitos básicos de React Native, como controle de estado, manipulação de eventos, exibição de alertas e estilização de