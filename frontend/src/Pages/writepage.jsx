import React, { useState, useEffect } from "react";
import { useDiary } from "../diary";

import { useLocation } from "react-router-dom";

export function WritePost() {
    const location = useLocation();
    const { state } = location || {};
    const [newPost, setNewPost] = useState(state?.postData || { title: "", date: "", text: "" });
    const [editMode, setEditMode] = useState(state?.editMode || false);
    const [editId, setEditId] = useState(state?.postId || null);
    const { createPosts, fetchPosts, updatePost } = useDiary();

    useEffect(() => {
        fetchPosts();
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const { success, message } = editMode 
            ? await updatePost(editId, newPost)
            : await createPosts(newPost);

        if (success) {
            alert(`Success: ${message}`);
            setNewPost({ title: "", date: "", text: "" });
            setEditMode(false);
            setEditId(null);
        } else {
            alert(`Error: ${message}`);
        }
    };

    return (
        <div className="container mx-auto p-4 max-w-2xl">
            <div className="card-base">
                <h1 className="text-2xl font-semibold text-center mb-6">
                    {editMode ? "Edit Journal Entry" : "New Journal Entry"}
                </h1>

                <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="form-group">
                        <label className="block text-gray-700 mb-2">Title</label>
                        <input
                            type="text"
                            className="input-field"
                            value={newPost.title}
                            onChange={(e) =>
                                setNewPost({ ...newPost, title: e.target.value })
                            }
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label className="block text-gray-700 mb-2">Date</label>
                        <input
                            type="date"
                            className="input-field"
                            value={newPost.date}
                            onChange={(e) =>
                                setNewPost({ ...newPost, date: e.target.value })
                            }
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label className="block text-gray-700 mb-2">Content</label>
                        <textarea
                            className="input-field min-h-[200px]"
                            value={newPost.text}
                            onChange={(e) =>
                                setNewPost({ ...newPost, text: e.target.value })
                            }
                            required
                        />
                    </div>

                    <button
                        type="submit"
                        className={`button w-full ${editMode ? "bg-green-500" : ""}`}
                    >
                        {editMode ? "Update Entry" : "Create Entry"}
                    </button>
                </form>
            </div>
        </div>
    );
}

export default WritePost;
