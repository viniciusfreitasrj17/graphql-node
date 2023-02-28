# Exmples Requests

## Create User

```sh
curl -X POST http://localhost:4011/graphql -H 'content-type: application/json' -d '{"query":"mutation{createUser(data:{firstname:\"Marcos\",lastname:\"Vinicius\",email:\"marcos@gmail.com\",password:\"pass\"}){email}}"}'
```

## Get User

```sh
curl -X GET http://localhost:4011/graphql -H 'content-type: application/json' -d '{"query":"query{getUsers{id email firstname }}"}'
```

## Create Pet

```sh
curl -X POST http://localhost:4011/graphql -H 'content-type: application/json' -d '{"query":"mutation{createPet(data:{name:\"Bob\",userId:\"8d4a4b4b-62dd-4beb-a894-49b9f882a8df\"}){name}}"}'
```

## Get Pet

```sh
curl -X POST http://localhost:4011/graphql -H 'content-type: application/json' -d '{"query":"query{getPets{name userId }}"}'
```

## Get Pet with Relation

```sh
curl http://localhost:4011/graphql -H 'content-type: application/json' -d '{"query":"query{getPets{name user{email}}}"}'
```

## Get User with Relation

```sh
curl -X POST http://localhost:4011/graphql -H 'content-type: application/json' -d '{"query":"query{getUsers{id email firstname pets{name}}}"}'
```
