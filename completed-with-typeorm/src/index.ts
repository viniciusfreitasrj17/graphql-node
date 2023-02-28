import "reflect-metadata";
import { resolve } from 'node:path'
import express from "express";
import { buildSchema } from "type-graphql";
import { UsersResolver } from "./modules/users/graphql/resolvers/UsersResolver";
import { ApolloServer } from "apollo-server-express";
import { connect } from "./config/database";
import { PetsResolver } from "./modules/pets/graphql/resolvers/PetsResolver";

async function init() {
  await connect();
  const app = express();
  const port = 4011;
  const schema = await buildSchema({
    resolvers: [UsersResolver, PetsResolver],
    emitSchemaFile: resolve(__dirname, 'schema.gql'),
  });
  const apolloServer = new ApolloServer({
    schema,
  });
  await apolloServer.start();
  apolloServer.applyMiddleware({ app });
  app.listen(port, () => console.log(`🚀 Server listenning on port ${port}!`));
}

init();
