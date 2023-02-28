import { randomUUID } from 'node:crypto'
import { ApolloServer, gql } from 'apollo-server'
import { TypeSource, IResolvers } from '@graphql-tools/utils'

interface User {
  id: string;
  name: string;
}

const users: User[] = []

// Schema First Approach
const typeDefs: TypeSource = gql`
  type User {
    id: String!
    name: String!
  }

  type Query {
    getUsers: [User!]!
  }

  type Mutation {
    createUser(name: String!): User!
  }
`

const resolvers: IResolvers = {
  Query: {
    getUsers: () => users
  },
  Mutation: {
    createUser: (_, args) => {
      const user: User = {
        id: randomUUID(),
        name: args.name,
      }

      users.push(user)

      return user
    }
  }
}

const server = new ApolloServer({
  typeDefs,
  resolvers,
})

server.listen().then(({ url }) => console.log(`Running in ${url}`))
