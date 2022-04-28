import mongoose from "mongoose";
import { UserCreateDto } from "./UserCreateDto";

export interface UserResponseDto extends UserCreateDto { // 인터페이스 확장
    _id: mongoose.Schema.Types.ObjectId;
    // gender: string; // 추가 속성
}