import React, { useState, useEffect } from "react";
import { useDiary } from "../diary";

export function WritePost() {
  const [newPost, setNewPost] = useState({
    title: "",
    date: "",
    text: "",
  });
  const [editMode, setEditMode] = useState(false);
  const [editId, setEditId] = useState(null);

  // Get functions and state from Zustand store
  const { 
    uposts, 
    createPosts, 
    fetchPosts, 
    deletePost, 
    updatePost 
  } = useDiary();

  // Fetch posts on component mount
  useEffect(() => {
    fetchPosts();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewPost({
      ...newPost,
      [name]: value,
    });
  };

  const handleAddPost = async (e) => {
    e.preventDefault();
    const { success, message } = await createPosts(newPost);

    if (success) {
      alert(`Success: ${message}`);
      setNewPost({ title: "", date: "", text: "" });
    } else {
      alert(`Error: ${message}`);
    }
  };

  const handleDelete = async (id) => {
    const { success, message } = await deletePost(id);
    if (success) {
      alert(`Success: ${message}`);
    } else {
      alert(`Error: ${message}`);
    }
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    const { success, message } = await updatePost(editId, newPost);
    
    if (success) {
      alert(`Success: ${message}`);
      setNewPost({ title: "", date: "", text: "" });
      setEditMode(false);
      setEditId(null);
    } else {
      alert(`Error: ${message}`);
    }
  };

  const handleEdit = (post) => {
    setEditMode(true);
    setEditId(post._id);
    setNewPost({
      title: post.title,
      date: post.date,
      text: post.text,
    });
  };

  return (
    <div style={{ margin: "0 auto", maxWidth: "800px", padding: "20px" }}>
      <h1 style={{ textAlign: "center", marginBottom: "20px" }}>
        {editMode ? "Edit Post" : "Write a Post"}
      </h1>
      
      <form onSubmit={editMode ? handleUpdate : handleAddPost}>
        <div style={{ marginBottom: "15px" }}>
          <label htmlFor="title">Title:</label>
          <input
            type="text"
            id="title"
            name="title"
            value={newPost.title}
            onChange={handleChange}
            style={{
              width: "100%",
              padding: "10px",
              border: "1px solid #ccc",
              borderRadius: "5px",
            }}
            required
          />
        </div>

        <div style={{ marginBottom: "15px" }}>
          <label htmlFor="date">Date:</label>
          <input
            type="date"
            id="date"
            name="date"
            value={newPost.date}
            onChange={handleChange}
            style={{
              width: "100%",
              padding: "10px",
              border: "1px solid #ccc",
              borderRadius: "5px",
            }}
            required
          />
        </div>

        <div style={{ marginBottom: "15px" }}>
          <label htmlFor="text">Content:</label>
          <textarea
            id="text"
            name="text"
            rows="5"
            value={newPost.text}
            onChange={handleChange}
            style={{
              width: "100%",
              padding: "10px",
              border: "1px solid #ccc",
              borderRadius: "5px",
            }}
            required
          />
        </div>

        <button
          type="submit"
          style={{
            width: "100%",
            padding: "10px",
            backgroundColor: editMode ? "#28a745" : "#007BFF",
            color: "#fff",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
          }}
        >
          {editMode ? "Update Post" : "Submit Post"}
        </button>
      </form>

      {/* Display existing posts */}
      <div style={{ marginTop: "30px" }}>
        <h2>Your Posts</h2>
        {uposts.map((post) => (
          <div
            key={post._id}
            style={{
              border: "1px solid #ddd",
              padding: "15px",
              marginTop: "10px",
              borderRadius: "5px",
            }}
          >
            <h3>{post.title}</h3>
            <p>{new Date(post.date).toLocaleDateString()}</p>
            <p>{post.text}</p>
            <div style={{ marginTop: "10px" }}>
              <button
                onClick={() => handleEdit(post)}
                style={{
                  marginRight: "10px",
                  padding: "5px 10px",
                  backgroundColor: "#28a745",
                  color: "#fff",
                  border: "none",
                  borderRadius: "3px",
                  cursor: "pointer",
                }}
              >
                Edit
              </button>
              <button
                onClick={() => handleDelete(post._id)}
                style={{
                  padding: "5px 10px",
                  backgroundColor: "#dc3545",
                  color: "#fff",
                  border: "none",
                  borderRadius: "3px",
                  cursor: "pointer",
                }}
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default WritePost;