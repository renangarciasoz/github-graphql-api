const { ApolloServer } = require("apollo-server");
const { importSchema } = require("graphql-import");
const resolvers = require("./resolvers");
const GithubDataSource = require("./api/GithubDataSource");

const schemaPath = "./schema/index.graphql";

const server = new ApolloServer({
  context: ({ req }) => {
    console.log(req.headers);
    return {
      headers: req.headers
    };
  },
  typeDefs: importSchema(schemaPath),
  resolvers,
  introspection: true,
  playground: true,
  dataSources: () => ({ githubApi: new GithubDataSource() })
});

server.listen({ port: process.env.PORT || 4000 }).then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});