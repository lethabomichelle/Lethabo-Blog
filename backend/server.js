const express = require("express")
const { createPool } = require("mysql2/promise");
const cors = require('cors');
require('dotenv').config();
// const posts = require('./postData.json');

const app = express();

app.use(cors());
app.use(express.json());

const pool = createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    port: process.env.DB_PORT,
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
    const sql = `insert into blog.blogdetails (Post_Id, Title, Author, Post_Date, Image_Url,  Passage) values (${post.id}, '${post.Title}', '${post.Author}', '${post.Post_Date}', '${post.Image_Url}', '${post.Passage}')`;
    // console.log(sql)
    pool.execute(sql).then(result => {
        console.log(sql)
        res.status(200);
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


// login

app.post("/api/login", (req, res) => {
    const sql = "SELECT * FROM userdetails WHERE username = ? AND user_Password = ?"
    const values = [
        req.body.email,
        req.body.password
    ]
    // console.log('body', values);
    pool.query(sql, values, (err, data) => {
        if (err) return res.json('Login Failed');
        // console.log('body')
        return res.json(data);
    })
})

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


app.listen(process.env.SERVER_PORT || 3001, function () {
    console.log("express server is running on 3001");
});