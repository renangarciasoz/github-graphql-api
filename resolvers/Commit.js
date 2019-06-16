module.exports = {
    commit_msg: (commit) => commit.commit.message,
    author_name: (commit) => commit.commit.author.name,
    author_email: (commit) => commit.commit.author.email,
    author_avatar_url: (commit) => {
        if (commit.author && commit.author.avatar_url){
            return commit.author.avatar_url
        }
        if (commit.owner && commit.owner.avatar_url) {
            return commit.owner.avatar_url
        }

        return 'https://png2.kisspng.com/sh/49eb5228faecd57b5c366a9ad8ca7213/L0KzQYm3V8IzN5R2kJH0aYP2gLBuTgV0baMyiOR4ZnnvdX65UME5NZpzReVyZ3j3Pcb6hgIua5Dzftd7ZX7mdX7smQBwNWZnTac9Y0C8SYjqgBUzNmY5TqUANUW0QYa6UsMyPmc9Sag7MUixgLBu/kisspng-user-profile-2018-in-sight-user-conference-expo-5b554c0997cce2.5463555115323166816218.png'
    },
    author_created_at: (commit) => commit.commit.author.date
}