import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import './detailsPage.css'
import CommentSection from "./comments";

const BlogLayout = () => {
    const [post, setPost] = useState({});
    const navigate = useNavigate();

    const { Post_Id } = useParams();

    useEffect(() => {
        fetch("http://localhost:3001/api/posts/" + Post_Id).then(async res => {
            if (res.ok) {
                const post = await res.json();
                console.log(post)
                setPost(post);
            }
        }).catch(e => console.log('e'))
    }, [Post_Id]);

    return (
        <div>
            <div className="my-5">
                <div className="p-5 text-center" style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.5)),url(${post.Image_Url})`, backgroundSize: ' cover', backgroundPosition: 'center', height: '35rem', }}>
                    <div className="container py-5" style={{ backgroundColor: 'transparent' }}>
                        <h1 style={{ backgroundColor: 'transparent', marginRight: '25rem' }} className="emphasis message">{post.Title}</h1>
                    </div>
                </div>
            </div>
            <div className="container my-5" style={{ color: 'white' }}>
                <h6> BY {post.Author} <span style={{ color: "grey" }}> POSTED ON {post.Post_Date} </span></h6>
                <br />
                <h4>{post.subtitle}</h4>
                {/* {String(post.passage).split('\n').map(paragraph => <p key={String(post.id)}>{paragraph}</p>)} */}
                <div dangerouslySetInnerHTML={{ __html: post.Passage }}>
                    { }
                </div>
            </div>
            <div className="buttons">
                <button onClick={() => deletePost(Post_Id)}>Delete</button>
                <button><Link to={"/edit/" + Post_Id}>Update</Link></button>
            </div>
            <hr style={{ borderTop: '2px solid white', width: '90%', margin: '20px auto' }} />
            <CommentSection />
        </div >
    );

    function deletePost(Post_Id) {
        fetch("http://localhost:3001/api/posts/" + Post_Id, {
            method: 'DELETE',
        }
        ).then(() => {
            navigate("/")
        })
    }
};

export default BlogLayout;