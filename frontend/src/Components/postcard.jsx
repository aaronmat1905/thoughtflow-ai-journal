import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDiary } from "../diary";

export function PostCard({ post }) {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const navigate = useNavigate();  // Use useNavigate here inside the functional component
    const { deletePost } = useDiary(); // Destructure deletePost from useDiary

    const handleOpenModal = () => {
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
    };

    const handleEdit = (e) => {
        e.stopPropagation(); // Prevent modal from opening

        // Redirect to the write page with the post data
        navigate("/write-post", {
            state: {
                editMode: true,
                postId: post._id,  // Pass the post ID
                postData: {
                    title: post.title,
                    date: post.date,
                    text: post.text,
                },
            },
        });
    };

    const handleDelete = async (e) => {
        e.stopPropagation(); // Prevent modal from opening
        const { success, message } = await deletePost(post._id); // Pass post ID to delete it
        if (success) {
            alert("Post deleted successfully");
        } else {
            alert(`Error: ${message}`);
        }
    };

    return (
        <>
            <div
                style={{
                    border: "1px solid #ddd",
                    borderRadius: "8px",
                    padding: "16px",
                    margin: "16px 0",
                    boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
                    backgroundColor: "#fff",
                    cursor: "pointer",
                }}
                onClick={handleOpenModal}
            >
                <h1
                    className="PostHeading"
                    style={{
                        fontSize: "1.5rem",
                        marginBottom: "8px",
                        color: "#333",
                    }}
                >
                    {post.title}
                </h1>
                <h2
                    style={{
                        fontSize: "1rem",
                        color: "#666",
                        marginBottom: "12px",
                    }}
                >
                    {new Date(post.date).toLocaleDateString()}
                </h2>
                <p
                    style={{
                        lineHeight: "1.5",
                        color: "#444",
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                        whiteSpace: "nowrap",
                    }}
                >
                    {post.text}
                </p>
                {/* Edit button */}
                <button
                    onClick={handleEdit}
                    style={{
                        backgroundColor: '#4CAF50',
                        color: 'white',
                        border: 'none',
                        padding: '10px 20px',
                        cursor: 'pointer',
                        borderRadius: '5px',
                        marginTop: '10px',
                    }}
                >
                    Edit
                </button>
                {/* Delete button */}
                <button
                    onClick={handleDelete}
                    style={{
                        backgroundColor: '#f44336',
                        color: 'white',
                        border: 'none',
                        padding: '10px 20px',
                        cursor: 'pointer',
                        borderRadius: '5px',
                        marginTop: '10px',
                        marginLeft: '10px',
                    }}
                >
                    Delete
                </button>
            </div>

            {/* Modal */}
            {isModalOpen && (
                <div
                    style={{
                        position: "fixed",
                        top: 0,
                        left: 0,
                        width: "100%",
                        height: "100%",
                        backgroundColor: "rgba(0, 0, 0, 0.8)",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        zIndex: 1000,
                    }}
                >
                    <div
                        style={{
                            backgroundColor: "#fff",
                            borderRadius: "8px",
                            padding: "24px",
                            maxWidth: "600px",
                            width: "90%",
                            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
                            position: "relative",
                        }}
                    >
                        <button
                            onClick={handleCloseModal}
                            style={{
                                position: "absolute",
                                top: "16px",
                                right: "16px",
                                background: "none",
                                border: "none",
                                fontSize: "1.5rem",
                                cursor: "pointer",
                            }}
                        >
                            &times;
                        </button>
                        <h1
                            style={{
                                fontSize: "2rem",
                                marginBottom: "16px",
                                color: "#333",
                            }}
                        >
                            {post.title}
                        </h1>
                        <h2
                            style={{
                                fontSize: "1rem",
                                color: "#666",
                                marginBottom: "12px",
                            }}
                        >
                            {new Date(post.date).toLocaleDateString()}
                        </h2>
                        <p
                            style={{
                                lineHeight: "1.8",
                                color: "#444",
                                whiteSpace: "pre-wrap",
                            }}
                        >
                            {post.text}
                        </p>
                    </div>
                </div>
            )}
        </>
    );
}

export default PostCard;
