module.exports = {
    commit_msg: (commit) => commit.commit.message,
    author_name: (commit) => commit.commit.author.name,
    author_avatar_url: (commit) => {
        if (commit.author && commit.author.avatar_url){
            return commit.author.avatar_url
        }
        if (commit.owner && commit.owner.avatar_url) {
            return commit.owner.avatar_url
        }

        return 'https://image.flaticon.com/icons/svg/17/17004.svg'
    },
    author_created_at: (commit) => commit.commit.author.date
}