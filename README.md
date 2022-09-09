# Wide Soft

## Descrição
Esse é meu primeiro projeto com PHP e Laravel.
Foi desenvolvido para um processo seletivo. 
O objetivo era criar uma aplicação onde os clientes - usuário cadastrados - pudessem cadastrar os URLs que desejam rastrear. 

## Ferramentas utilizadas
- MySQL
- PHP
- Laravel
- Composer
- Axios
- ReactJS
- React Router Dom
- Toastify

## Instalação e execução
Para rodar esta aplicação é necessário ter instalado no seu computador:
- [PHP](https://www.php.net/manual/pt_BR/install.php)
- [Composer](https://getcomposer.org/)
- [Laravel](https://laravel.com/docs/4.2#install-composer)
- [MySql](https://dev.mysql.com/doc/mysql-getting-started/en/)

#### 1. Clone o repositório e entre na pasta do projeto

  - `git clone git@github.com:isabelanery/wide-soft.git`.

  - `cd wide-soft` 

## Backend
Em uma janela do terminal, navegue até o projeto e entre na pasta `/backend` e siga as instruções.

#### 1. Configure as variáveis de ambiente
Na pasta `backend`, renomeie o arquivo `.env.example` para `.env`, e adicione sua senha do MySQL
`DB_PASSWORD=exemplo`

#### 2. Crie o Banco de Dados
É preciso criar um banco de dados no MySQL com o nome `widesoft`.

Criando por linha de comando no terminal: 
  1. `mysql -u root -p`
  2. `create database widesoft;`
  3. `exit`

Criando pelo WorkBench: 
  - `CREATE DATABASE widesoft;`

#### 3. Execute as Migrations 
  - `php artisan migrate`

#### 4. Subindo a API 
  - `php artisan serve`

## Frontend
Abra uma nova janela no terminal, navegue até o projeto e entre na pasta `/frontend`.

#### 1. Instalando as dependencias
  - `npm install`

#### 2. Rodando o projeto
  - `npm start`

Acesse a aplicação frontend: http://localhost:3000

Cadastre-se, faça o login e adicione um novo URL. 