import React, { useEffect, useState } from "react";
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import './addpost.css'
import Navbar from "./navbar/Nav";
import { useParams, useNavigate } from "react-router-dom";

const EditPage = () => {
    const { id } = useParams();
    const navigate = useNavigate();

    const [post, setPost] = useState({});
    const [title, setTitle] = useState(post.title);
    const [content, setContent] = useState(post.passage);
    const [author, setAuthor] = useState(post.author);
    const [date, setDate] = useState(post.date);
    const [image, setImage] = useState(post.image);

    useEffect(() => {
        fetch("http://localhost:3001/api/posts/" + id).then(async res => {
            if (res.ok) {
                const post = await res.json();
                setPost(post);
                setTitle(post.title);
                setContent(post.passage);
                setAuthor(post.author);
                setDate(post.date);
                // setImage(post.image);
            }
        }).catch(e => console.log('e'))
    }, [id]);

    const handleSubmit = (e) => {
        e.preventDefault();
        const blog = { id, title, passage: content, author, date, image };
        // console.log(blog);

        fetch("http://localhost:3001/api/posts/" + id, {
            method: 'PUT',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(blog)
        }).then(() => {
            navigate("/")
        })
    }

    return (
        <div >
            <div>
                <Navbar />
            </div>
            <div onSubmit={handleSubmit} className="addPost" style={{ marginLeft: '130px' }}>
                <div className="content">
                    <input type="text" placeholder="title" value={title} onChange={(e) => setTitle(e.nativeEvent.target.value)} />
                    <div className="writeContainer">
                        <ReactQuill className="editor" theme="snow" value={content} onChange={setContent} />
                    </div>
                </div>
                <div className="modal-dialog authorBox" role="document">
                    <div className="modal-content rounded-4 shadow">
                        <div>
                            <div style={{ paddingTop: '30px' }} className="item"><input type="text" placeholder="Enter your name" value={author} onChange={(e) => setAuthor(e.nativeEvent.target.value)} /></div>
                            <div className="item"><input type="date" placeholder="date" value={date} onChange={(e) => setDate(e.nativeEvent.target.value)} /></div>
                            <div className="item"><input type="file" id="file" src={image} onChange={(e) => setImage(e.nativeEvent.target.value)} /></div>
                        </div>
                        <div className="button">
                            <button onClick={handleSubmit}>Create Post</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EditPage;





