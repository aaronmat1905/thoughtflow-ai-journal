import express from "express"; 
import mongoose from "mongoose";
import UPost from "../models/upost_model.js";
import {getPost, createPost, delPostID, updatePost} from "../controllers/upost.controller.js";

const Postroutes = express.Router(); 
 
// Post manipulation functions
Postroutes.get("/", getPost);
Postroutes.post("/", createPost);
Postroutes.delete("/:id", delPostID);
Postroutes.put("/:id", updatePost);

export default Postroutes;