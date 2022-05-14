import mongoose from "mongoose"; //몽구스 불러오기
import { UserInfo } from "../interfaces/user/Userinfo";

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true //고유하다
    },
    age: {
        type: Number
        //들어오든말든
    },
    school: {
        name: { type: String },
        major: { type: String }
    }
});

export default mongoose.model<UserInfo & mongoose.Document>("User", UserSchema); //User라는 이름으로 스키마 내보낸다.
