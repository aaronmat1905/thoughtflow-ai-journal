import React from "react"; 

export function PostCard({ post }) {
    return (
        <div style={{
            border: "1px solid #ddd",
            borderRadius: "8px",
            padding: "16px",
            margin: "16px 0",
            boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
            backgroundColor: "#fff"
        }}>
            <h1 className="PostHeading" style={{
                fontSize: "1.5rem",
                marginBottom: "8px",
                color: "#333"
            }}>{post.title}</h1>
            <h2 style={{
                fontSize: "1rem",
                color: "#666",
                marginBottom: "12px"
            }}>{new Date(post.date).toLocaleDateString()}</h2>
            <p style={{
                lineHeight: "1.5",
                color: "#444"
            }}>{post.text}</p>
        </div>
    ); 
}

export default PostCard;