import express from "express"; 
import mongoose from "mongoose"; 
import UPost from "../models/upost_model.js";

export const getPost = async (req, res) => {
    try {
        const posts = await UPost.find({}).sort({ date: -1 });
        res.status(200).json({ success: true, data: posts });
    } catch (error) {
        console.error("Error fetching posts:", error.message);
        res.status(500).json({ success: false, message: "Server error" });
    }
};

export const createPost = async (req, res) => {
    try {
        const { title, date, text } = req.body;
        
        if (!title || !date || !text) {
            return res.status(400).json({ 
                success: false, 
                message: "Please provide all fields" 
            });
        }

        const newPost = new UPost({
            title,
            date: new Date(date),
            text
        });

        await newPost.save();
        res.status(201).json({ success: true, data: newPost });
    } catch (error) {
        console.error("Error creating post:", error.message);
        res.status(500).json({ success: false, message: "Server Error" });
    }
};

export const delPostID = async (req, res) => {
    const { id } = req.params;
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({ success: false, message: "Invalid ID" });
    }
    try {
        const post = await UPost.findByIdAndDelete(id);
        if (!post) {
            return res.status(404).json({ success: false, message: "Post not found!" });
        }
        res.status(200).json({ success: true, message: "Post Deleted" });
    } catch (error) {
        console.error("Error deleting post:", error.message);
        res.status(500).json({ success: false, message: "Server Error" });
    }
}; 

export const updatePost = async (req, res) => {
    try {
        const { id } = req.params;
        const { title, date, text } = req.body;

        if (!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(404).json({ success: false, message: "Invalid ID" });
        }

        const updatedPost = await UPost.findByIdAndUpdate(
            id,
            { 
                title,
                date: new Date(date),
                text
            },
            { new: true }
        );

        if (!updatedPost) {
            return res.status(404).json({ success: false, message: "Post not found" });
        }

        res.status(200).json({ success: true, data: updatedPost });
    } catch (error) {
        console.error("Error updating post:", error.message);
        res.status(500).json({ success: false, message: "Server Error" });
    }
};