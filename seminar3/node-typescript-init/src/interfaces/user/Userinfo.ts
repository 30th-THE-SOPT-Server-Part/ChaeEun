/* 유저 콜렉션을 만들기위해 userinfo 만듦 */
import { SchoolInfo } from "../school/SchoolInfo";

export interface UserInfo {
    name: string;
    phone: string;
    email: string;
    age: number;
    school: SchoolInfo;
}