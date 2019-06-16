module.exports = {
  repos: (usuario, _, { dataSources }) =>
    dataSources.githubApi.getRepos(usuario.login)
};
