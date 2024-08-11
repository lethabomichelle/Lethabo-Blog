import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Post() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        fetch("http://localhost:3001/api/posts/").then(async res => {
            if (res.ok) {
                const posts = await res.json();
                setPosts(posts);
            }
        }).catch(e => console.log(e))
    }, []);

    return (
        <div>
            {posts.map(post =>
                <div key={post.id} className="container my-5">
                    <div className="row p-4 pb-0 pe-lg-0 pt-lg-5 align-items-center rounded-3 border shadow-lg">
                        <div className="col-lg-4   overflow-hidden shadow-lg">
                            <img className="rounded-lg-3" src={post.Image_Url} alt="" width="720" />
                        </div>
                        <div className="col-lg-7 p-3 p-lg-5 pt-lg-3">
                            <Link to={"/blog/" + post.Post_Id} style={{ color: 'white' }} className="display-6 fw-bold lh-5">{post.Title}</Link>
                        </div>
                    </div></div>
            )}
        </div>

    )
}

export default Post