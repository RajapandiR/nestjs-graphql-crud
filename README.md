# Nest js - Graphql Interview Task
## Task Requirements
- Build using Nest Js as a microservice. 
- Use MongoDB  / MySql as database.
- Implement a GraphQL.
Create API for CRUD with required validation and JWT token authentication and authorization.
- Add Read Me instructions for the local deployment and run. 
- Give important code quality and implement unit testing.

## Software Requirements

- Node.js **20+**
- MongoDB **6+** 

## Environment variables
Copy content from .env.sample into a new file .env in the root directory.

## How to run the application
```
// To install all dependencies
npm install

// To start the application
npm run start:dev
```
## API End points

### User Signup 
http://localhost:3000/graphql

#### Request body
```
mutation {
     createUser(createUser: { username: "test", email: "test@gmail.com", password: "Test@123" }) {
       id
       username
       email
     }
}
```

#### Response - 200 OK

```
{
  "data": {
    "createUser": {
      "id": "678a7c9be6db6c4ca28faad1",
      "email": "test@gmail.com"
    }
  }
}
```



### User Login
http://localhost:3000/graphql

#### Request body
```
 mutation {
    login(email:"test@gmail.com", password: "Test@123"){
    accessToken
  }
}
```

#### Response - 200 OK

```
{
  "data": {
    "login": {
      "accessToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NzhhN2M5YmU2ZGI2YzRjYTI4ZmFhZDEiLCJlbWFpbCI6InRlc3RAZ21haWwuY29tIiwiaWF0IjoxNzM3MTMxOTI2LCJleHAiOjE3MzcxMzU1MjZ9.17RoWlx6c1mNYGGNXR6ya0ht41IKhKvOiE0ahYcMtow"
    }
  }
}

```
### Create Product 
http://localhost:3000/graphql

#### Request body
```
mutation{
  createProduct(body:{name: "Test", price: 100}){
    price
    name
  }
}
```

#### Request Headers

```
{
  "authorization": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NzhhN2M5YmU2ZGI2YzRjYTI4ZmFhZDEiLCJlbWFpbCI6InRlc3RAZ21haWwuY29tIiwiaWF0IjoxNzM3MTc0MDQ3LCJleHAiOjE3Mzc1MzQwNDd9.MvRlJjDarg5OrSocXJgWak5nFnE77pAcch1CWm3xD_M"
}
```

#### Response - 200 OK

```
{
  "data": {
    "createProduct": {
      "price": 100,
      "name": "Test"
    }
  }
}
```


### Edit Product 
http://localhost:3000/graphql

#### Request body
```
mutation{
  updateProduct(body:{id: "678a6a875c8d79cbfece5897", name: "Testing"}){
    id
    name
    price
  }
}
```

#### Request Headers

```
{
  "authorization": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NzhhN2M5YmU2ZGI2YzRjYTI4ZmFhZDEiLCJlbWFpbCI6InRlc3RAZ21haWwuY29tIiwiaWF0IjoxNzM3MTc0MDQ3LCJleHAiOjE3Mzc1MzQwNDd9.MvRlJjDarg5OrSocXJgWak5nFnE77pAcch1CWm3xD_M"
}
```

#### Response - 200 OK

```
{
  "data": {
    "updateProduct": {
      "id": "678a6a875c8d79cbfece5897",
      "name": "Testing",
      "price": 100
    }
  }
}
```


### Get Product 
http://localhost:3000/graphql

#### Request body
```
query{
  getProduct(id: "678a6a875c8d79cbfece5897"){
    id
    name
    price
  }
}
```

#### Request Headers

```
{
  "authorization": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NzhhN2M5YmU2ZGI2YzRjYTI4ZmFhZDEiLCJlbWFpbCI6InRlc3RAZ21haWwuY29tIiwiaWF0IjoxNzM3MTc0MDQ3LCJleHAiOjE3Mzc1MzQwNDd9.MvRlJjDarg5OrSocXJgWak5nFnE77pAcch1CWm3xD_M"
}
```

#### Response - 200 OK

```
{
  "data": {
    "getProduct": {
      "id": "678a6a875c8d79cbfece5897",
      "name": "Testing",
      "price": 100
    }
  }
}
```


### Get Products
http://localhost:3000/graphql

#### Request body
```
query{
  count
  getProducts{
    id
    name
    price
  }
}
```
#### Request Headers

```
{
  "authorization": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NzhhN2M5YmU2ZGI2YzRjYTI4ZmFhZDEiLCJlbWFpbCI6InRlc3RAZ21haWwuY29tIiwiaWF0IjoxNzM3MTc0MDQ3LCJleHAiOjE3Mzc1MzQwNDd9.MvRlJjDarg5OrSocXJgWak5nFnE77pAcch1CWm3xD_M"
}
```
#### Response - 200 OK

```
{
  "data": {
    "count": 3,
    "getProducts": [
      {
        "id": "678b3a94d54b0007b207c8dc",
        "name": "Testing",
        "price": 200
      },
      {
        "id": "678b2cd23950e3690b91585c",
        "name": "Test",
        "price": 100
      },
      {
        "id": "678a8219e6db6c4ca28faad5",
        "name": "Test",
        "price": 100
      }
    ]
  }
}
```


### Delete Product
http://localhost:3000/graphql

#### Request body
```
mutation{
  deleteProduct(id: "678a6a875c8d79cbfece5897")
}
```
#### Request Headers

```
{
  "authorization": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NzhhN2M5YmU2ZGI2YzRjYTI4ZmFhZDEiLCJlbWFpbCI6InRlc3RAZ21haWwuY29tIiwiaWF0IjoxNzM3MTc0MDQ3LCJleHAiOjE3Mzc1MzQwNDd9.MvRlJjDarg5OrSocXJgWak5nFnE77pAcch1CWm3xD_M"
}
```

#### Response - 200 OK

```
{
  "data": {
    "deleteProduct": true
  }
}
```