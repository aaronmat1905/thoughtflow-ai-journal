import express from "express"; 
import mongoose from "mongoose"; 
import product from "../models/upost_model.js";

export const getPost = async (req, res) => {
    try {
        const posts = await UPost.find({});
        res.status(200).json({ success: true, data: posts });
    } catch (error) {
        console.error("Error fetching products:", error.message);
        res.status(500).json({ success: false, message: "Server error" });
    }
};

export const createPost = async (req, res) => {
    const userPost = req.body;
    if (!userPost.title || !userPost.text) {
        return res.status(400).json({ success: false, message: "Please provide all fields" });
    }

    const newPost = new UPost(userPost);
    try {
        await newPost.save();
        res.status(201).json({ success: true, data: newPost });
    } catch (error) {
        console.error("Error creating post:", error.message);
        res.status(500).json({ success: false, message: "Server Error" });
    }
};

export const delPostID =  async (req, res) => {
    const { id } = req.params;
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({success:true, data:updatedProduct});
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

export const updatePost =  async (req, res)=>{
    const {id} = req.params; 
    const uPost = req.body; 

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({success:true, data:updatedProduct});
    }
    try{
        const updatedPost = await UPost.findByIdAndUpdate(id, UPost, {new:true}); //pdt after update
        res.status(200).json({success: true, data:updatedProduct}); 
    }catch(error){
        res.status(500).json({success:false, message:"server error"})
    }
};