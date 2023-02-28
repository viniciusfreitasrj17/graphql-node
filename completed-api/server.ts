import "reflect-metadata";
import { resolve } from 'node:path'
import { ApolloServer } from 'apollo-server';
import { buildSchema } from "type-graphql";
import { AppointmentsResolver } from "./resolvers/appointments.resolve";

async function bootstrap() {
  const schema = await buildSchema({
    resolvers: [
      AppointmentsResolver,
    ],
    emitSchemaFile: resolve(__dirname, 'schema.gql'),
  })

  const server = new ApolloServer({ schema })
  const { url } = await server.listen()
  console.log(`🚀 Server listenning in ${url}`)
}

bootstrap()
