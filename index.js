const { ApolloServer } = require("apollo-server");
const { importSchema } = require("graphql-import");
const resolvers = require("./resolvers");
const GithubDataSource = require("./api/GithubDataSource");

const schemaPath = "./schema/index.graphql";

const server = new ApolloServer({
  context: ({ req }) => {
    console.log(req.headers);
    return {
      headers: req.headers,
      driver
    };
  },
  typeDefs: importSchema(schemaPath),
  resolvers,
  introspection: true,
  playground: true,
  dataSources: () => ({ githubApi: new GithubDataSource() })
});

// Initiate the server
server.listen(process.env.PORT || 3000, () => {
  console.log(`Server started on port: ${process.env.PORT || 3000}`);
});
