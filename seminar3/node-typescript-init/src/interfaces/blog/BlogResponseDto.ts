import mongoose from "mongoose";
import { BlogCreateDto } from "./BlogCreateDto";

export interface BlogResponseDto extends BlogCreateDto{ // 인터페이스 확장
    _id: mongoose.Schema.Types.ObjectId;
}