module.exports = {
    commit_msg: (commit) => commit.commit.message,
    author_name: (commit) => commit.commit.author.name,
    author_email: (commit) => commit.commit.author.email,
    author_avatar_url: (commit) => commit.author.avatar_url,
    author_created_at: (commit) => commit.commit.author.date
}