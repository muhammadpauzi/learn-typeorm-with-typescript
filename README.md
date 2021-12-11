# Learn TypeORM and TypeScript with Object Oriented programming paradigm.
Learn **TypeORM** and learn **Typescript** too with Object Oriented programming paradigm.

Built with :
- TypeScript
- TypeORM
- Sqlite 3
- Express

## **Api Spec**

Base URL : `http://localhost:5000/api`

### **Users Endpoint**

#### Get all users
Request :
- Method : **GET**
- Endpoint : `/users`

Response :
- Success :
```json
{
    "data": [
        {
            "id": "number",
            "username": "string",
            "name": "string",
            "email": "string",
            "posts": [{

            }],
            "createdAt": "date",
            "updatedAt": "date"
        }
    ]
}
```

#### Get user
Request :
- Method : **GET**
- Endpoint : `/users/:id`

Response :
- Success :
```json
{
    "data": {
        "id": "number",
        "username": "string",
        "name": "string",
        "email": "string",
        "posts": [{

        }],
        "createdAt": "date",
        "updatedAt": "date"
    }
}
```

- Not Found Error :
```json
{
    "code": "number",
    "message": "string"
}
```

#### Create user
Request :
- Method : **POST**
- Endpoint : `/users`
- Headers : 
```json
{
    "Content-Type": "application/json"
}
```
- Body
```json
{
    "username": "string",
    "name": "string",
    "email": "string",
    "password": "string"
}
```

Response :
- Success :
```json
{

    "message": "string",
    "data": {
        "id": "number",
        "username": "string",
        "name": "string",
        "email": "string",
        "createdAt": "date",
        "updatedAt": "date"
    }
}
```

#### Update user
Request :
- Method : **PUT**
- Endpoint : `/users?id={{id}}`
- Headers : 
```json
{
    "Content-Type": "application/json"
}
```
- Body
```json
{
    "username": "string (optional)",
    "name": "string (optional)"
}
```

Response :
- Success :
```json
{

    "message": "string",
    "data": {
        "id": "number",
        "username": "string",
        "name": "string",
        "email": "string",
        "posts": [{

        }],
        "createdAt": "date",
        "updatedAt": "date"
    }
}
```

- Not Found Error :
```json
{
    "code": "number",
    "message": "string"
}
```

#### Delete user
Request :
- Method : **DELETE**
- Endpoint : `/users?id={{id}}`

Response :
- Success :
```json
{

    "message": "string"
}
```

- Not Found Error :
```json
{
    "code": "number",
    "message": "string"
}
```


### **Posts Endpoint**

#### Get all posts
Request :
- Method : **GET**
- Endpoint : `/posts`

Response :
- Success :
```json
{
    "data": [
        {
            "id": "number",
            "content": "string",
            "userId": "number",
            "user": [{

            }],
            "createdAt": "date",
            "updatedAt": "date"
        }
    ]
}
```

#### Get post
Request :
- Method : **GET**
- Endpoint : `/posts/:id`

Response :
- Success :
```json
{
    "data": {
        "id": "number",
        "content": "string",
        "userId": "number",
        "user": [{
            
        }],
        "createdAt": "date",
        "updatedAt": "date"
    }
}
```

- Not Found Error :
```json
{
    "code": "number",
    "message": "string"
}
```

#### Create post
Request :
- Method : **POST**
- Endpoint : `/posts`
- Headers : 
```json
{
    "Content-Type": "application/json"
}
```
- Body
```json
{
    "content": "string",
    "userId": "number"
}
```

Response :
- Success :
```json
{

    "message": "string",
    "data": {
        "id": "number",
        "content": "string",
        "userId": "number",
        "createdAt": "date",
        "updatedAt": "date"
    }
}
```

#### Update post
Request :
- Method : **PUT**
- Endpoint : `/posts?id={{id}}`
- Headers : 
```json
{
    "Content-Type": "application/json"
}
```
- Body
```json
{
    "content": "string (optional)"
}
```

Response :
- Success :
```json
{

    "message": "string",
    "data": {
        "id": "number",
        "content": "string",
        "userId": "number",
        "user": [{

        }],
        "createdAt": "date",
        "updatedAt": "date"
    }
}
```

- Not Found Error :
```json
{
    "code": "number",
    "message": "string"
}
```

#### Delete user
Request :
- Method : **DELETE**
- Endpoint : `/posts?id={{id}}`

Response :
- Success :
```json
{
    "message": "string"
}
```

- Not Found Error :
```json
{
    "code": "number",
    "message": "string"
}
```

