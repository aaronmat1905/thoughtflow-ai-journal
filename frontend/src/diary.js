import { create } from "zustand";

export const useDiary = create((set) => ({
  uposts: [],

  setPosts: (posts) => set({ uposts: posts }),

  createPosts: async (newPost) => {
    try {
      // Validate input fields
      if (!newPost.title?.trim() || !newPost.date || !newPost.text?.trim()) {
        return { success: false, message: "Please fill in all fields." };
      }

      const res = await fetch("/api/userposts", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newPost),
      });

      if (!res.ok) {
        throw new Error(`Failed to create post. Status: ${res.status}`);
      }

      const data = await res.json();
      if (data.success) {
        set((state) => ({ uposts: [...state.uposts, data.data] }));
        return { success: true, message: "Post created successfully" };
      } else {
        return { success: false, message: data.message };
      }
    } catch (error) {
      console.error("Error creating post:", error);
      return { success: false, message: "Error creating post" };
    }
  },

  fetchPosts: async () => {
    try {
      const res = await fetch("/api/userposts");

      if (!res.ok) {
        throw new Error(`Failed to fetch posts. Status: ${res.status}`);
      }

      const data = await res.json();
      if (data.success) {
        set({ uposts: data.data });
      }
    } catch (error) {
      console.error("Error fetching posts:", error);
    }
  },

  deletePost: async (pid) => {
    try {
      const res = await fetch(`/api/userposts/${pid}`, {
        method: "DELETE",
      });

      if (!res.ok) {
        throw new Error(`Failed to delete post. Status: ${res.status}`);
      }

      const data = await res.json();
      if (!data.success) {
        return { success: false, message: data.message };
      }

      set((state) => ({
        uposts: state.uposts.filter((post) => post._id !== pid),
      }));
      return { success: true, message: "Post deleted successfully" };
    } catch (error) {
      console.error("Error deleting post:", error);
      return { success: false, message: "Error deleting post" };
    }
  },
}));
