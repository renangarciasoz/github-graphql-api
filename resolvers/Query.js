module.exports = {
  users: (_, __, { dataSources }) => 
    dataSources.githubApi.getUsers(),
  user: (_, { login }, { dataSources }) =>
    dataSources.githubApi.getUser(login),
  repos: (_, { login }, { dataSources }) =>
    dataSources.githubApi.getRepos(login),
  commits: (_, { login, repoName }, { dataSources }) =>
    dataSources.githubApi.getCommits(login, repoName)
};
