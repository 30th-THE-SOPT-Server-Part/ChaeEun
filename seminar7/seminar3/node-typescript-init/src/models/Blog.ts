import mongoose from "mongoose"; 
import { BlogInfo } from "../interfaces/blog/Bloginfo";

const BlogSchema = new mongoose.Schema({
    writer: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true,
        unique: true
    },
    like: {
        type: Number
    },
});

export default mongoose.model<BlogInfo & mongoose.Document>("Blog", BlogSchema); //Blog라는 이름으로 스키마 내보낸다.
