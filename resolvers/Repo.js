module.exports = {
    commits: (repo, _, { dataSources }) => {
        const data = {
            login: repo.full_name.split('/')[0],
            name: repo.name
        }
        return dataSources.githubApi.getCommits(data.login, data.name)
    }
}