require('dotenv').config()
const express = require('express')

const app = express();

const github = {
    "login": "victorShiva",
    "id": 141312814,
    "node_id": "U_kgDOCGxDLg",
    "avatar_url": "https://avatars.githubusercontent.com/u/141312814?v=4",
    "gravatar_id": "",
    "url": "https://api.github.com/users/victorShiva",
    "html_url": "https://github.com/victorShiva",
    "followers_url": "https://api.github.com/users/victorShiva/followers",
    "following_url": "https://api.github.com/users/victorShiva/following{/other_user}",
    "gists_url": "https://api.github.com/users/victorShiva/gists{/gist_id}",
    "starred_url": "https://api.github.com/users/victorShiva/starred{/owner}{/repo}",
    "subscriptions_url": "https://api.github.com/users/victorShiva/subscriptions",
    "organizations_url": "https://api.github.com/users/victorShiva/orgs",
    "repos_url": "https://api.github.com/users/victorShiva/repos",
    "events_url": "https://api.github.com/users/victorShiva/events{/privacy}",
    "received_events_url": "https://api.github.com/users/victorShiva/received_events",
    "type": "User",
    "site_admin": false,
    "name": "Shiv Shankar Agrahari",
    "company": null,
    "blog": "",
    "location": "Mumbai",
    "email": null,
    "hireable": null,
    "bio": "Hey ! Welcome to my repo hub",
    "twitter_username": null,
    "public_repos": 20,
    "public_gists": 0,
    "followers": 3,
    "following": 3,
    "created_at": "2023-08-03T08:04:51Z",
    "updated_at": "2024-08-03T03:18:27Z"
}

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get('/twitter', (req, res) => {
    res.send("Shivagupta.com");
})
app.get('/login', (req, res) => {
    res.send("<h1>Please login at twitter.com</h1>");
})

app.get('/github', (req, res) => {
    res.json(github)
})

app.listen(process.env.PORT, () => {
    console.log(`Example app listening on port ${process.env.PORT}`)
})