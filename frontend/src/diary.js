import { create } from "zustand";

export const useDiary = create((set) => ({
  uposts: [],

  // Function to set all posts
  setPosts: (posts) => set({ uposts: posts }),

  // Function to create a new post
  createPosts: async (newPost) => {
    if (!newPost.title || !newPost.date || !newPost.text) {
      return { success: false, message: "Please fill in all fields." };
    }

    const res = await fetch("/api/uposts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newPost),
    });

    const data = await res.json();
    set((state) => ({ uposts: [...state.uposts, data.data] }));
    return { success: true, message: "Post created successfully" };
  },

  // Function to fetch all posts
  fetchPosts: async () => {
    const res = await fetch("/api/uposts");
    const data = await res.json();
    set({ uposts: data.data });
  },

  // Function to delete a specific post by ID
  deletePost: async (pid) => {
    const res = await fetch(`/api/uposts/${pid}`, {
      method: "DELETE",
    });

    const data = await res.json();
    if (!data.success) return { success: false, message: data.message };

    // Update the UI without refreshing
    set((state) => ({
      uposts: state.uposts.filter((post) => post._id !== pid),
    }));
    return { success: true, message: data.message };
  },

  // Function to update a specific post by ID
  updatePost: async (pid, updatedPost) => {
    const res = await fetch(`/api/uposts/${pid}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedPost),
    });

    const data = await res.json();
    if (!data.success) return { success: false, message: data.message };

    // Update the UI without refreshing
    set((state) => ({
      uposts: state.uposts.map((post) => (post._id === pid ? data.data : post)),
    }));
    return { success: true, message: data.message };
  },
}));
