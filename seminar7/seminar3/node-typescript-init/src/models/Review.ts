import mongoose from "mongoose";
import { ReviewInfo } from "../interfaces/review/ReviewInfo";

const ReviewSchema = new mongoose.Schema({
    writer: {
        type: mongoose.Types.ObjectId,
        required: true,
        ref: "User" // User 콜렉션 참고
    },
    movie: {
        type: mongoose.Types.ObjectId,
        required: true,
        ref: "Movie" //어떤 영화에 대한 리뷰인지 참고
    },
    title: {
        type: String,
        required: true
    },
    content: {
        type: String
    }
});

export default mongoose.model<ReviewInfo & mongoose.Document>("Review", ReviewSchema);//콜렉션 이름 Review로 지정