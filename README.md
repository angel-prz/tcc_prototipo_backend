# angelperez_projeto_dbe2

## Requisitos

- PHP >= 8.4
- Composer
- Node.js e npm
- SQLite ou PostgreSQL
- Laravel

## Instalação

1. Clone o repositório:

```sh
git clone https://github.com/angel-prz/angelperez_projeto_dbe2.git
cd angelperez_projeto_dbe2
```
2. Instalar as dependências PHP:

```sh
composer install
```

3. Instalar as dependências Node:
```sh
npm install
```

4. Copiar o arquivo de ambiente e configure:
```sh
cp .env.example .env
```

5. Gere a chave de app (APP_KEY):
```sh
php artisan key:generate
```
6. Criar o banco de dados SQLite, se não utilizar PostgreSQL:
```sh
touch database/database.sqlite
```
7. Executar as migrações e seed:
```sh
php artisan migrate
php artisan migrate:fresh
php artisan db:seed
```

8. Iniciar o servidor de desenvolvimento:
```sh
php artisan serve
```


# Rascunho diagrama
![diagrama](https://github.com/user-attachments/assets/6c9f36c3-538b-4d07-8ff2-43c4cb839e0a)

