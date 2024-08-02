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

## Usage <a name = "usage"></a>

### Routes and Responses

#### Sessions

- **GET /sessions** - Returns status 200 if the user is logged in 401 if not.
- **POST /sessions** - Requires a JSON:
```
{ "username": "username", "password": "password" }
```
Returns status 200 if correct and 401 if its not.
- **DELETE /sessions** - Removes user sessions from the server.

#### Cards

-  **GET** 
