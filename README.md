# Hato backend

## Table of Contents

- [About](#about)
- [Getting Started](#getting_started)
- [Usage](#usage)

## About <a name = "about"></a>

## Getting Started <a name = "getting_started"></a>

Intall [Git](https://git-scm.com) and clone this repository.

### Prerequisites

You need to install [Node.js](https://nodejs.org/en) and [PostgreSQL](https://www.postgresql.org)

```
node js
```

### Installing

You need to install your server.

The step will be

```
npm install
```

Create .env.local file in your root
In you .env.local file, it should include

```
PORT = `<port_number>`
DB_USER=`<your_user_name>`
DB_PASSWORD=`<your_password>`
DB_NAME=`<your_database_name>`
CORS_ORIGIN = `<your_frontend_url>`
```

And run your server.

```
npm run express-dev
```

For the database,
first, set up your database.

```
CREATE DATABASE `<your_database_name>`
```

and run migration and seed.

```
npm run migrate-latest
```

```
npm run seed-data
```

## Usage <a name = "usage"></a>

### Routes and Responses

#### Sessions

- **GET /sessions** - Returns status 200 if the user is logged in 401 if not.

- **POST /sessions** - Requires a JSON:
  Please replace anyting inside `<>` with your actual information.

```
{
  "username": "`<username>`",
  "password": "`<password>`"
}
```

Returns status 200 if correct and 401 if its not.

- **DELETE /sessions** - Removes user sessions from the server and returns status 200.

#### Cards

- **GET /cards** - Shows all cards and returns status 200.
- **GET /cards/random** - Shows one random card and returns 200.
- **GET /cards/random/categories/:id** - Shows one random card from the selected category and returns 200.
- **GET /cards/users/:id** - Shows all careds by a user id and returns 200.
- **GET /cards/:id** - Shows a card by the id and returns 200.
- **GET /cards/categories/:id** - Shows all card by the category id and returns 200.
- **POST /cards** - Adds a card. Requires a Json:

```
{
    "front_text": "`<front_text>`",
    "back_text": "`<back_text>`",
    "category_id": "`<category_id>`",
    "user_id": "`<user_id>`"
}
```

Returns status 200 if it's created.

- **PATCH /cards/:id** - Updates a card content. Requires a Json:

```
{
    "front_text": "`<front_text>`",
    "back_text": "`<back_text>`",
    "category_id": "`<category_id>`"
}
```

Returns status 200 if it's updated.

- **DELETE /cards/:id** - Removes a card by card id and returns status 200.

#### Users

- **GET /users** - Shows all user and returns status 200.
- **GET /users/:id** - Shows a user by the user id and returns 200.
- **POST /users** - Adds a user. Requires a Json:

```
{
    "username": "`<username>`",
    "password": "`<password>`"
}
```

Returns status 200 if it's created.

- **PATCH /users/:id** - Updates username and/or password by the user id. Requires a Json:

```
{
    "username": "`<username>`",
    "password": "`<password>`"
}
```

Returns status 200 if it's updated.

- **DELETE /users/:id** - Removes a user name, password by the user id and returns status 200.

#### Comments

- **GET /comments** - Shows all comment and returns status 200.
- **GET /comments/:id** - Shows a comment by the comment id and returns 200.
- **POST /comments** - Adds a comment. Requires a Json:

```
{
    "text": "`<text>`"
}
```

Returns status 200 if it's created.

- **PATCH /comments/:id** - Updates a comment by the comment id. Requires a Json:

```
{
    "text": "`<text>`"
}
```

Returns status 200 if it's updated.

- **DELETE /comments/:id** - Removes a comment by the comment id and returns status 200.

#### Likes, Dislikes

- **GET /likes**- Shows all like and returns status 200.
- **GET /dislikes** - Shows all dislike and returns status 200.
- **GET /likes/cards/:id** - Shows a like by the card id and returns 200.
- **GET /dislikes/cards/:id** - Shows a dislike by the card id and returns 200.
- **POST /likes** - Adds a like. Requires a Json:
- **POST /dislikes** - Adds a dislike. Requires a Json, the same format with likes.

```
{
    "user_id": "`<user_id>`",
    "card_id": "`<card_id>`"
}
```

Returns status 200 if it's created.

- **DELETE /likes/users/:id** - Removes a like by the user id and returns status 200 and 1 if is deleted or 0 if there is nothing to delete.
- **DELETE /dislikes/users/:id** - Removes a dislike by the user id and returns status 200 and 1 if is deleted or 0 if there is nothing to delete.
- **DELETE /likes/:id** - Removes a like by the card id and returns status 200.
- **DELETE /dislikes/:id** - Removes a dislike by the card id and returns status 200.
