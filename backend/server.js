const express = require("express");
const cors = require('cors');
const posts = require('./postData.json');

const app = express();

app.use(cors());
app.use(express.json());

let nextId = (() => {
    let max = 0;
    posts.postList.forEach(post => {
        if (post.id > max)
            max = post.id;
    });
    return max;
})();

// get a post from json

app.get('/api/posts', (req, res) => res.json(posts));

app.get('/api/posts/:id', (req, res) => {
    const id = req.params.id;
    const post = posts.postList.find(post => post.id === id);
    res.json(post);
});

// adding a post to json
app.post('/api/posts', (req, res) => {
    const post = req.body;
    const id = ++nextId;
    post["id"] = String(id);
    posts.postList.push(post);
    res.json(post);
});

// updaiting post

app.put('/api/posts/:id', (req, res) => {
    const id = String(req.params.id);
    const post = req.body;
    const index = posts.postList.findIndex(post => post.id === id);
    if (index === -1 || id !== post.id) {
        res.sendStatus(400);
        return;
    }
    posts.postList.splice(index, 1);
    posts.postList.push(post);
    res.json(post);
});

// deleting post
app.delete('/api/posts/:id', (req, res) => {
    const id = String(req.params.id);
    const index = posts.postList.findIndex(post => post.id === id);
    if (index === -1) {
        res.sendStatus(400);
        return;
    }
    posts.postList.splice(index, 1);
    res.sendStatus(200);
});

app.listen(3001, function () {
    console.log("express server is running on 3001");
});