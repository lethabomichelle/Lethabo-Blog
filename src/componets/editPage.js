import React, { useEffect, useState } from "react";
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import './addpost.css'
import Navbar from "./navbar/Nav";
import { useParams, useNavigate } from "react-router-dom";

const EditPage = () => {
    const { Post_Id } = useParams();
    const navigate = useNavigate();

    const [Title, setTitle] = useState('');
    const [Passage, setContent] = useState('');
    const [Author, setAuthor] = useState('');
    const [Post_Date, setDate] = useState('');
    const [Image_Url, setImage] = useState('');

    useEffect(() => {
        fetch("http://localhost:3001/api/posts/" + Post_Id).then(async res => {
            if (res.ok) {
                const post = await res.json();
                setTitle(post.Title);
                setContent(post.Passage);
                setAuthor(post.Author);
                setDate(post.Post_Date);
                setImage(post.Image_Url);
            }
        }).catch(e => console.log('e'))
    }, [Post_Id]);

    const handleSubmit = (e) => {
        e.preventDefault();
        const blog = { Post_Id, Title, Passage, Author, Post_Date, Image_Url };
        console.log(blog);

        fetch("http://localhost:3001/api/posts/" + Post_Id, {
            method: 'PUT',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(blog)
        }).then(() => {
            navigate("/blog/" + Post_Id);
        })
    }

    return (
        <div >
            <div>
                <Navbar />
            </div>
            <div onSubmit={handleSubmit} className="addPost" style={{ marginLeft: '130px' }}>
                <div className="content">
                    <input type="text" placeholder="title" value={Title} onChange={(e) => setTitle(e.nativeEvent.target.value)} />
                    <div className="writeContainer">
                        <ReactQuill className="editor" theme="snow" value={Passage} onChange={setContent} />
                    </div>
                </div>
                <div className="modal-dialog authorBox" role="document">
                    <div className="modal-content rounded-4 shadow">
                        <div>
                            <div style={{ paddingTop: '30px' }} className="item"><input type="text" placeholder="Enter your name" value={Author} onChange={(e) => setAuthor(e.nativeEvent.target.value)} /></div>
                            <div className="item"><input type="date" placeholder="date" value={Post_Date} onChange={(e) => setDate(e.nativeEvent.target.value)} /></div>
                            <div className="item"><input type="text" id="file" value={Image_Url} placeholder="Image URL" onChange={(e) => setImage(e.nativeEvent.target.value)} /></div>
                        </div>
                        <div className="button">
                            <button style={{ color: 'black' }} onClick={handleSubmit}>Edit Post</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EditPage;





