const { ApolloServer } = require("apollo-server");
const { importSchema } = require("graphql-import");
const resolvers = require("./resolvers");
const GithubDataSource = require("./api/GithubDataSource");

const schemaPath = "./schema/index.graphql";
const server = new ApolloServer({
  typeDefs: importSchema(schemaPath),
  resolvers,
  dataSources: () => ({ githubApi: new GithubDataSource() })
});

if (process.env.PORT) {
  server.listen(process.env.PORT)
} else {
  server.listen().then(({ url }) => {
    console.log(`🚀 Server ready at ${url}`);
  });
}

