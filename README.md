
## Projeto

O Happy é uma aplicação que conecta pessoas à casas de acolhimento institucional para fazer o dia de muitas crianças mais feliz.

## Tecnologias

Esse projeto foi desenvolvido com as seguintes tecnologias:

- [Node.js](https://nodejs.org/en/)
- [React](https://reactjs.org)
- [React Native](https://facebook.github.io/react-native/)
- [TypeScript](https://www.typescriptlang.org/)

## Como utilizar

Instalação
- Na pasta principal

    `yarn install`
   
- Por algum motivo que ainda não descobri a causa é necessário remover a pasta node_modules em packages/web/node_modules/styled-components/node_modules

- Para a criação do banco foi utilizado o postgres SQL. Você deve criar um banco e configurar o arquivo .env de acordo com os seus dados.

Inicialização do banco de dados e servidor
- Na pasta server

    `yarn typeorm migration:run`
    
    `yarn seed`
   
    `yarn dev`

Inicialização da página

- Na pasta web

    `yarn start`

- Na pasta mobile
    
    `yarn start`
    
    `yarn android`

Acesso à área restrita (WEB)

- Para acessar a área restrita, insira as seguintes credenciais.

    `email: admin@happy.com`
    
    `password: admin`
