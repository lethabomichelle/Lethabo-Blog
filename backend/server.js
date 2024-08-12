const express = require("express")
const { createPool } = require("mysql2/promise");
const cors = require('cors');
// const posts = require('./postData.json');

const app = express();

app.use(cors());
app.use(express.json());

const pool = createPool({
    host: "127.0.0.1",
    user: "root",
    password: "Lethabo.ml78",
    database: "blog",
    connectionLimit: 30
});

let nextId = 0;
(() => {
    const sql = 'SELECT max(Post_Id) as max FROM blog.blogdetails';
    pool.query(sql).then((result) => {
        const max = result[0][0]['max'];
        nextId = max;
    });
})();

// // get a post from mySQL

app.get('/api/posts', (req, res) => {
    const sql = 'SELECT * FROM blog.blogdetails';
    pool.query(sql).then((result, fields) => {
        res.json(result[0]);
    });
    console.log('nextId', nextId);
});

app.get('/api/posts/:id', (req, res) => {
    const sql = `SELECT * FROM blog.blogdetails where Post_id = ${req.params.id}`;
    pool.query(sql).then(result => {
        if (result[0].length === 0) {
            res.send('no post with id "' + req.params.id + '"')
            return;
        }
        res.json(result[0][0]);
    }).catch(e => console.log(e));
});

// // adding a post to json
app.post('/api/posts', (req, res) => {
    const post = req.body;
    const id = ++nextId;
    post["id"] = String(id);
    const sql = `insert into blog.blogdetails values (${post.id}, ${post.Title}, ${post.Author}, ${post.Post_Date}, ${post.Image_Url}, ${post.Passage})`;
    pool.execute(sql).then(result => {
        res.json(post);
    });
});

// deleting post
app.delete('/api/posts/:id', (req, res) => {
    const id = String(req.params.id);
    const sql = `delete from blog.blogdetails where Post_ID = ${id}`;
    pool.execute(sql).then(() => {
        res.status(200);
    });
});

// // updaiting post

// app.put('/api/posts/:id', (req, res) => {
//     const id = String(req.params.id);
//     const post = req.body;
//     const index = posts.postList.findIndex(post => post.id === id);
//     if (index === -1 || id !== post.id) {
//         res.sendStatus(400);
//         return;
//     }
//     posts.postList.splice(index, 1);
//     posts.postList.push(post);
//     res.json(post);
// });


app.listen(3001, function () {
    console.log("express server is running on 3001");
});