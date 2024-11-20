import React, { useState } from "react";
import { useDiary } from "../diary";
import { useHistory } from "react-router-dom"; // Importing useHistory to navigate

export function PostCard({ post }) {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const { deletePost } = useDiary(); // Importing deletePost from useDiary
    const history = useHistory(); // Hook to navigate to WritePost page

    const handleOpenModal = () => {
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
    };

    const handleDelete = async () => {
        const { success, message } = await deletePost(post._id); // Using post's id to delete
        if (success) {
            alert('Post deleted successfully');
        } else {
            alert(`Error: ${message}`);
        }
    };

    const handleEdit = (e) => {
        e.stopPropagation(); // Prevent modal from opening
        history.push(`/writepage/${post._id}`); // Navigate to the WritePost page for editing
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

                {/* Edit Button */}
                <button
                    onClick={handleEdit}
                    className="edit-button"
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

                {/* Delete Button */}
                <button
                    onClick={handleDelete}
                    className="delete-button"
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
