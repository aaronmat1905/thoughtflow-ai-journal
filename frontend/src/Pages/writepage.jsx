import React, { useState } from "react";
import { useDiary } from "../diary"; // Assuming you have `useDiary` from the zustand store

export function WritePost() {
  const [newPost, setNewPost] = useState({
    title: "",
    date: "",
    text: "",
  });

  const { createPosts } = useDiary();

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

    if (!success) {
      alert(`Error: ${message}`);
    } else {
      alert(`Success: ${message}`);
      setNewPost({ title: "", date: "", text: "" });
    }
  };

  return (
    <div style={{ margin: "0 auto", maxWidth: "500px", padding: "20px" }}>
      <h1 style={{ textAlign: "center", marginBottom: "20px" }}>Write a Post</h1>
      <form onSubmit={handleAddPost}>
        <div style={{ marginBottom: "15px" }}>
          <label htmlFor="title" style={{ display: "block", marginBottom: "5px" }}>
            Title:
          </label>
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
          <label htmlFor="date" style={{ display: "block", marginBottom: "5px" }}>
            Date:
          </label>
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
          <label htmlFor="text" style={{ display: "block", marginBottom: "5px" }}>
            Content:
          </label>
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
          ></textarea>
        </div>

        <button
          type="submit"
          style={{
            width: "100%",
            padding: "10px",
            backgroundColor: "#007BFF",
            color: "#fff",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
          }}
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default WritePost;