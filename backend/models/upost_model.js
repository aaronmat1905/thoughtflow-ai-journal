import mongoose from 'mongoose'; 

const postSchema = new mongoose.Schema({
    title: {
        type: String, 
        required: true 
    }, 
    date: {
        type: Date,
        required: true
    },
    text: {
        type: String, 
        required: true
    }
}, {
    timestamps: true
}); 

const UPost = mongoose.model('userpost', postSchema);

export default UPost; 