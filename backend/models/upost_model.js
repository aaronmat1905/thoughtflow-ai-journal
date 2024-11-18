import mongoose from 'mongoose'; 

const postSchema = new mongoose.Schema({
    title:{
        type:String, 
        required:true 
    }, 
    text:{
        type: String, 
        required:true
    }
}, {
    timestamps:true // createdAt, updatedAt
}); 

const UPost = mongoose.model('userpost', postSchema); // Create a model or a collection called "Post", and each Post should follow the schema

export default UPost; 