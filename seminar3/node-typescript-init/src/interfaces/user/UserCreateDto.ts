import { SchoolInfo } from "../school/SchoolInfo";

export interface UserCreateDto {
    name: string;
    phone: string;
    email: string;
    password: string; // password 받기 추가
    age?: number;
    school?: SchoolInfo;
}