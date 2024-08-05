import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import './detailsPage.css'

const BlogLayout = () => {
    const [post, setPost] = useState({});
    const navigate = useNavigate();

    const { id } = useParams();

    useEffect(() => {
        fetch("https://lethabo-blog-1.onrender.com/api/posts/" + id).then(async res => {
            if (res.ok) {
                const post = await res.json();
                setPost(post);
            }
        }).catch(e => console.log('e'))
    }, [id]);

    return (
        <div>
            <div className="my-5">
                <div className="p-5 text-center" style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.5)),url(${post.image})`, backgroundSize: ' cover', backgroundPosition: 'center', height: '35rem', }}>
                    <div className="container py-5" style={{ backgroundColor: 'transparent' }}>
                        <h1 style={{ backgroundColor: 'transparent', marginRight: '25rem' }} className="emphasis message">{post.title}</h1>
                    </div>
                </div>
            </div>
            <div className="container my-5" style={{ color: 'white' }}>
                <h6> BY {post.author} <span style={{ color: "grey" }}> POSTED ON {post.date} </span></h6>
                <br />
                <h4>{post.subtitle}</h4>
                {/* {String(post.passage).split('\n').map(paragraph => <p key={String(post.id)}>{paragraph}</p>)} */}
                <div dangerouslySetInnerHTML={{ __html: post.passage }}>
                    { }
                </div>
            </div>
            <div className="buttons">
                <button onClick={() => deletePost(id)}>Delete</button>
                <button><Link to={"/edit/" + id}>Update</Link></button>
            </div>
        </div >
    );

    function deletePost(id) {
        fetch("http://localhost:3001/api/posts/" + id, {
            method: 'DELETE',
        }
        ).then(() => {
            navigate("/")
        })
    }
};

export default BlogLayout;