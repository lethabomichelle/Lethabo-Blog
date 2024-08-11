import React, { useState } from 'react';

function CommentSection() {
    const [comments, setComments] = useState([]);
    const [newComment, setNewComment] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (newComment.trim() !== '') {
            setComments([...comments, { text: newComment }]);
            setNewComment('');
        }
    };

    return (
        <div style={{ color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column' }}>
            <h2 >Comments</h2>
            {/* <hr style={{ borderTop: '2px solid white', width: '80%', margin: '20px auto' }} /> */}
            <ul style={{ background: 'none' }}>
                {comments.map((comment, index) => (
                    <li key={index} style={{ display: 'flex' }}>{comment.text}</li>
                ))}
            </ul>
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', marginTop: '2rem' }}>
                <textarea
                    style={{ color: 'white', width: '350px' }}
                    type="textarea"
                    name="comment" rows="4" cols="50"
                    value={newComment}
                    onChange={(e) => setNewComment(e.target.value)}
                    placeholder="Add a comment"
                ></textarea>

                <button type="submit">Submit</button>
            </form>

        </div>
    );
}

export default CommentSection;
