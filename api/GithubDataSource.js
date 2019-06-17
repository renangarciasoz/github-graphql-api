const { RESTDataSource } = require("apollo-datasource-rest");

class GithubDataSource extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = "https://api.github.com/";
  }

  willSendRequest(request) {
    request.headers.set('Content-Type', "application/json; charset=utf-8");
  }

  async getUsers() {
    const users = await this.get(`/users`).then(res => {
      if (typeof res === 'string') return JSON.parse(res)
      return res
    });

    return users ? (users.length >= 4 ? users.slice(0, 4) : users) : [];
  }

  async getUser(login) {
    const user = await this.get(`/users/${login}`).then(res => {
      if (typeof res === 'string') return JSON.parse(res)
      return res
    });

    return user;
  }

  async getRepos(login) {
    const repos = await this.get(`/users/${login}/repos`).then(res => {
      if (typeof res === 'string') return JSON.parse(res)
      return res
    });

    return repos ? (repos.length >= 4 ? repos.slice(0, 4) : repos) : [];
  }

  async getCommits(login, repoName) {
    const commits = await this.get(`/repos/${login}/${repoName}/commits`).then(res => {
      if (typeof res === 'string') return JSON.parse(res)
      return res
    });

    return commits ? (commits.length >= 4 ? commits.slice(0, 4) : commits) : [];
  }
}

module.exports = GithubDataSource;
