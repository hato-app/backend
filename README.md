# backend

## Table of Contents

- [About](#about)
- [Getting Started](#getting_started)
- [Usage](#usage)
- [Contributing](../CONTRIBUTING.md)

## About <a name = "about"></a>

Write about 1-2 paragraphs describing the purpose of your project.

## Getting Started <a name = "getting_started"></a>

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See [deployment](#deployment) for notes on how to deploy the project on a live system.

### Prerequisites

What things you need to install the software and how to install them.

```
Give examples
```

### Installing

A step by step series of examples that tell you how to get a development env running.

Say what the step will be

```
Give the example
```

And repeat

```
until finished
```

End with an example of getting some data out of the system or using it for a little demo.

Please replace anyting inside `<>` with your actual information.


## Usage <a name = "usage"></a>

### Routes and Responses

#### Sessions

- **GET /sessions** - Returns status 200 if the user is logged in 401 if not.

- **POST /sessions** - Requires a JSON:
```
{
  "username": "`<username>`",
  "password": "`<password>`"
}
```
Returns status 200 if correct and 401 if its not.
- **DELETE /sessions** - Removes user sessions from the server and returns status 200.


#### Cards

-  **GET /cards** - Shows all card and returns status 200.
-  **GET /cards/random** - Shows one random card and returns 200.
-  **GET /cards/random/category/:id** - Shows one random card from the selected category and returns 200.
-  **GET /cards/:id** - Shows a card by the id and returns 200.
-  **GET /cards/category/:id** - Shows all card by the category id and returns 200.
-  **POST /cards** - Adds a card. Requires a Json:
```
{ 
    "front_text": "`<front_text>`", 
    "back_text": "`<back_text>`",
    "category_id": "`<category_id>`",
    "user_id": "`<user_id>`"
}
```
Returns status 200 if it's created.
-  **PATCH /cards/:id** - Updates a card content. Requires a Json:
```
{ 
    "front_text": "`<front_text>`", 
    "back_text": "`<back_text>`",
    "category_id": "`<category_id>`"
}
```
Returns status 200 if it's updated.
-  **DELETE /cards/:id**  - Removes a card by card id and returns status 200.


#### Users

-  **GET /users** - Shows all user and returns status 200.
-  **GET /users/:id** - Shows a user by the user id and returns 200.
-  **POST /users**  - Adds a user. Requires a Json:
```
{ 
    "username": "`<username>`", 
    "password": "`<password>`"
}
```
Returns status 200 if it's created.
-  **PATCH /users/:id** - Updates username and/or password by the user id. Requires a Json:
```
{ 
    "username": "`<username>`", 
    "password": "`<password>`"
}
```
Returns status 200 if it's updated.
-  **DELETE /users/:id** - Removes a user name, password by the user id and returns status 200.


#### Comments

-  **GET /comments** - Shows all comment and returns status 200.
-  **GET /comments/:id** - Shows a commnet by the comment id and returns 200.
-  **POST /comments** - Adds a comment. Requires a Json:
```
{ 
    "text": "`<text>`"
}
```
Returns status 200 if it's created.
-  **PATCH /comments/:id** - Updates a comment by the comment id. Requires a Json:
```
{ 
    "text": "`<text>`"
}
```
Returns status 200 if it's updated.
-  **DELETE /comments/:id** - Removes a comment by the comment id and returns status 200.


#### Likes, Dislikes

-  **GET /likes**- Shows all like and returns status 200.
-  **GET /dislikes** - Shows all dislike and returns status 200.
-  **GET /likes/cards/:id** - Shows a like by the card id and returns 200.
-  **GET /dislikes/cards/:id** - Shows a dislike by the card id and returns 200.
-  **POST /likes**  - Adds a like. Requires a Json:
-  **POST /dislikes**  - Adds a dislike. Requires a Json, the same format with likes.
```
{ 
    "user_id": "`<user_id>`",
    "card_id": "`<card_id>`"
}
```
Returns status 200 if it's created.
-  **DELETE /likes/:id**  - Removes a like by the card id and returns status 200.
-  **DELETE /dislikes/:id**  - Removes a dislike by the card id and returns status 200.