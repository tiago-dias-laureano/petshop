
# Projeto PetShop+


## Configurações basicas do projeto.


Instalando dependências.

```bash
  npm install sequelize mysql2 express
  npm install sequelize-cli nodemon --save-dev
```

## Arquivo de configuração .sequelizerc.

Arquivo utilizado para criar a organização das pastas e arquivo de configuração sendo ele json ou js.

```javascript
  const path = require('path');

  module.exports = {
    'config': path.resolve('src', 'config', 'config.js'),
    'models-path': path.resolve('src', 'models'),
    'seeders-path': path.resolve('src', 'seeders'),
    'migrations-path': path.resolve('src', 'migrations')
  }
```

## Comandos mais usados do sequelize.

O init cria as pastas com arquivos iniciais com base no sequelizerc ou cria na pasta raiz caso o
arquivo de configuração não seja criado.
```bash
  npx sequelize-cli init
```


Com base no arquivo config.js dentro da pasta config o sequelize cria o banco de dados.
```bash
  npx sequelize db:create
```

Comando utilizados para criar as migrations (na qual foi utilizada para criação das tabelas do 
banco de dados)
```bash
  npx sequelize migration:create --name=create-user
  npx sequelize migration:create --name=create-service
  npx sequelize migration:create --name=create-status
  npx sequelize migration:create --name=create-order
```

Comando para criar ou desfazer as querys com base nas migrations.
```bash
  npx sequelize db:migrate
  npx sequelize db:migrate:undo 
```


## Configuração do config.js


Configuração do arquivo config.js/config.json para definir o host, senha, username e nome da db.

```javascript
  module.exports = {
  development: {
    username: 'root',
    password: null,
    database: 'petshop',
    host: '127.0.0.1',
    dialect: 'mysql'
  }
}
```
## Stack utilizada

**Front-end:** React, ContextApi

**Back-end:** Node, Express, Sequelize e MySql

