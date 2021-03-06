# Trabalho de Paradigmas: Implementação

## Table of Contents

- [Implementação](#implementação-de-uma-rest-api)
  * [requisitos](#requisitos)
- [ToDoList](#to-do-list)
- [Relatório 1](#relatório-1)
  * [Sistema](#sistema)
  * [Tecnologias e Módulos](#tecnologias-e-módulos)
  * [Associação módulo](#associação-módulo)
  * [Associação módulo](#associação-módulo)
  * [Módulos concorrentes distribuido](#módulos-concorrentes-distribuido)
  * [Andamento do projeto em percentual](#andamento-do-projeto-em-percentual)
- [Documetanção das rotas](#documetanção-das-rotas)

## Implementação de uma REST-API

* #### Requisitos
    1. Módulo de cadastro de usuários;
    2. Módulo de login;
    3. Módulo de gerenciamento de perfis;
    4. Módulo de comunicação entre processos distribuídos;
    5. Módulo de protocolos;
    6. Módulos de frontend;
    7. Módulos de backend;
    8. Definir a Metodologia de desenvolvimento do software;
    9. Módulo de comunicação de baixo nível (RPC);
    10. Módulo de comunicação de alto nível (definido pelo grupo ex. Web service, API veb, Invocação Remota, Corba, Soap, Dcom, etc).
    11. Banco de dados;
    12. Desejado -> Acesso de alguma funcionalidade via celular.

### To Do List

- [x] Definir em grupo
- [x] Fazer a proposta de um sistema ao professor
- [x] Na apresentação da proposta o grupo deverá mostrar uma modelagem básica que mostre o funcionamento do sistema
- [x] Relatório sobre a proposta (contendo: Título do projeto, nome dos integrantes do grupo, descrição da proposta e detalhamento das funcionalidades principais).
- [ ] Implementação do sistema

# Relatório 1

* #### Requisitos especificos
    1. Descreva aqui o funcionamento do sistema que o grupo está implementando.
    2. Quais tecnologias são utilizadas.
    3. Modularização (quais módulos macros serão implementados).
    4. Descrever cada módulo (semi formal).
    5. Associação módulo -> aluno.
    6. Qual(is) módulos serão concorrentes e/ou distribuído.
    7. Andamento do projeto em percentual (por módulo).
    8. Andamento do projeto em percentual ( total do projeto).

## Sistema

O sistema será uma REST api com operações de _CRUD_ via _HTTP_, esse sistema será utilizado para catalogar os animais de um zoológico e seus respectivos recintos.

## Tecnologias e Módulos

A linguagem para o lado servidor será o Node.js, junto com os módulos **Express**  (Framework web), **Mongoose** (ODM), **Swagger** (Documentação)

Para o lado cliente será utilizado o **Vue** um framework front-end, junto com o seu ecossistema.

Para armazenar os dados será utilizado um software de Banco de Dados MongoDB, esse bd será hospedado na internet.

## Associação módulo

Módulos de servidor -> Virgílio    
Módulos de cliente -> Alexandre    
Banco de dados -> Luis  

## Módulos concorrentes distribuido

O Node.js é uma linguagem single threaded e assíncrona. Nesse projeto não foi constatado a necessidade de módulos concorrentes e/ou distribuídos mas caso uma comunicação entre usuário e servidor seja necessário utilizaremos __WebSocket__ e seu ecossistema no Node.js

## Andamento do projeto em percentual

**Servidor** = 80%, Foi feito as rotas _users_, _locals_, _animals_, precisa apenas arrumar pequenos detalhes e arrumar a parte de autorização,
pois a parte de autentificação já foi implementada :grinning:  
**Cliente**  = 10%, Foi implementado um esqueleto para começar a codificação :disappointed:  
**Banco de dados**  = 60% Foi feito um DER, além dos modelos, só necessario popular o banco de dados :astonished: 


## Documetanção das rotas
 [POSTMAN](https://documenter.getpostman.com/view/5251988/RzZDhGSs#15b33f5e-2f79-4cf0-b48c-a1c975a97256)
