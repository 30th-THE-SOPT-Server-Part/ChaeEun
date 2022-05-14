import { PostBaseResponseDto } from "../interfaces/common/PostBaseResponse";
import { UserCreateDto } from "../interfaces/user/UserCreateDto";
import { UserResponseDto } from "../interfaces/user/UserResponseDto";
import { UserUpdateDto } from "../interfaces/user/UserUpdateDto";
import { UserSignInDto } from "../interfaces/user/UserSignInDto";
import User from "../models/User";
import bcrypt from "bcryptjs";

const createUser = async (userCreateDto: UserCreateDto): Promise<PostBaseResponseDto | null> => { // 퀴즈: 여기 반환타입으로 PostBaseResponseDto로쓰면 에러 -> async함수여서 기본적으로 promise반환하기때문에,
    try {
        const existUser = await User.findOne({
            email: userCreateDto.email
        });
        if (existUser) return null;

        const user = new User ({
            name: userCreateDto.name,
            phone: userCreateDto.phone,
            email: userCreateDto.email,
            password: userCreateDto.password,
            age: userCreateDto.age,
            school: userCreateDto.school
        });

        const salt = await bcrypt.genSalt(10); // 아주 작은 임의의 랜덤한 텍스트
        user.password = await bcrypt.hash(userCreateDto.password, salt);
        await user.save();

        const data = {
            _id: user.id
        };

        return data;
    } catch (error) {
        console.log(error);
        //reqeust response는 컨트롤러에서만 전달하는거니까 쓰지않는다.
        throw error;
    }
}

const signInUser = async (userSignInDto: UserSignInDto): Promise<PostBaseResponseDto | null | number> => {
    try {
        const user = await User.findOne({
            email: userSignInDto.email
        });
        if (!user) return null;

        const isMatch = await bcrypt.compare(userSignInDto.password, user.password);
        if (!isMatch) return 401;

        const data = {
            _id: user._id
        };

        return data;
    } catch (error) {
        console.log(error);
        throw error;
    }
}

const updateUser = async (userId: string, userUpdateDto: UserUpdateDto) => {
    try {
        await User.findByIdAndUpdate(userId, userUpdateDto);

    }catch(error) {
        console.log(error);
        throw error;
    }
}

const findUserById = async (userId: string): Promise<UserResponseDto | null> => {
    try {
        const user = await User.findById(userId);
        
        if (!user) {
            return null;
        }

        return user;
    } catch (error) {
        console.log(error);
        throw error;
    }
}

const deleteUser = async (userId: string): Promise<void> => {
    try {
        await User.findByIdAndDelete(userId);
    } catch (error) {
        console.log(error);
        throw error;
    }
}

export default {
    createUser,
    signInUser,
    updateUser,
    findUserById,
    deleteUser,
}