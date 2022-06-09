/* JWT token 객체 안에 담아서 보내 줄 정보 */
import mongoose from "mongoose";

export interface JwtPayloadInfo {
    user: {
        id: mongoose.Schema.Types.ObjectId
    }
}