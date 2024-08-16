import React, { useState } from "react";
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import './addpost.css'
import Navbar from "./navbar/Nav";
import { useNavigate } from "react-router-dom";

const Write = () => {
    const navigate = useNavigate();

    const [Title, setTitle] = useState('');
    const [Passage, setContent] = useState('');
    const [Author, setAuthor] = useState('');
    const [Post_Date, setDate] = useState('');
    const [Image_Url, setImage] = useState('');

    function handleSubmit(e) {
        e.preventDefault();
        const blog = { Title, Passage, Author, Post_Date, Image_Url };

        return fetch("https://backend-s05n.onrender.com/api/posts/", {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(blog)
        }).then(async (res) => {
            res = await res.json();
            navigate("/blog/" + res.id);
        });
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
                            <div className="item"><input type="text" id="file" placeholder="Image URL" onChange={(e) => setImage(e.nativeEvent.target.value)} /></div>
                        </div>
                        <div className="button">
                            <button style={{ color: 'black' }} onClick={handleSubmit}>Create Post</button>
                        </div>
                        {/* <div className="item"></div> */}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Write;