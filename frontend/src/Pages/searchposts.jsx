import React, { useEffect } from "react";
import { useDiary } from "../diary";
import "../app.css";
import {PostCard} from "../Components/postcard"; 

export function SearchPosts() {
  const { uposts, fetchPosts } = useDiary();

  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <div style={{ 
      margin: "0 auto", 
      maxWidth: "800px", 
      padding: "20px",
      backgroundColor: "#f5f5f5"
    }}>
      <h1 style={{ 
        textAlign: "center", 
        marginBottom: "30px",
        color: "#333"
      }}>
        Your Journal Entries
      </h1>
      
      {uposts.length === 0 ? (
        <p style={{ textAlign: "center", color: "#666" }}>
          No journal entries yet. Start writing!
        </p>
      ) : (
        uposts.map((post) => (
          <PostCard key={post._id} post={post} />
        ))
      )}
    </div>
  );
}

export default SearchPosts;