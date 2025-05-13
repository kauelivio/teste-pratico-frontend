# Teste Prático de Frontend

Projeto construído como desafio técnico com objetivo de avaliação dos conhecimentos e habilidades do desenvolvedor.

Desenvolvido utilizando Angular 16.

## 🚀 Começando

Essas instruções permitirão que você obtenha uma cópia do projeto em operação na sua máquina local para fins de desenvolvimento e teste.

### 📋 Pré-requisitos

De que coisas você precisa para instalar o software e como instalá-lo?

* [npm](https://docs.npmjs.com/) - Gerenciador de dependências
* [Node.js v16.x ou v18.x](https://nodejs.org/docs/latest/api/)  - Ambiente de execução
* [Angular CLI v16.x](https://v16.angular.io/docs) - Framework usado
    * Instale globalmente
    ```
    npm install -g @angular/cli@16.2.16
    ```
    * Verifique a versão
    ```
    ng version
    ```

### 🔧 Instalação

Dentro do ambiente node com os pré-requisitos devidamente instalados:

* Instale as dependências do projeto 
```
npm install
```

* Inicie a aplicação
```
ng serve -o
```

## ⚙️ Executando os testes

A aplicação está coberta de testes, principalmente nos fluxos de login e em componentes mais complexos.

Para executar os testes automatizados da aplicação:
```
ng test
```

## 📋 Anotações

O projeto possui 2 usuários mockados para serem utilizados para fins de testes.

login: usuario@mock.com password: senha123

login: admin@mock.com password: senha123

Para adicionar usuários extras confira o arquivo [USERS_MOCK](https://github.com/kauelivio/teste-pratico-frontend/blob/main/src/app/shared/mock/users.mock.ts)
## 📄 Licença

Este projeto está sob a MIT License - veja o arquivo [LICENSE](https://github.com/kauelivio/teste-pratico-frontend/blob/main/LICENSE) para detalhes.