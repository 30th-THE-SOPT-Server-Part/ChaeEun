import { PostBaseResponseDto } from "../interfaces/common/PostBaseResponse";
import { BlogCreateDto } from "../interfaces/blog/BlogCreateDto";
import { BlogResponseDto } from "../interfaces/blog/BlogResponseDto";
import { BlogUpdateDto } from "../interfaces/blog/BlogUpdateDto";
import Blog from "../models/Blog";

const createBlog = async (blogCreateDto: BlogCreateDto): Promise<PostBaseResponseDto> => { // 퀴즈: 여기 반환타입으로 PostBaseResponseDto로쓰면 에러 -> async함수여서 기본적으로 promise반환하기때문에,
    try {
        const blog = new Blog ({
            writer: blogCreateDto.writer,
            title: blogCreateDto.title,
            content: blogCreateDto.content,
            like: blogCreateDto.like 
        });

        await blog.save();

        const data = {
            _id: blog.id
        };

        return data;
    } catch (error) {
        console.log(error);
        //reqeust response는 컨트롤러에서만 전달하는거니까 쓰지않는다.
        throw error;
    }
}

const updateBlog = async (postId: string, blogUpdateDto: BlogUpdateDto) => {
    try {
        await Blog.findByIdAndUpdate(postId, blogUpdateDto);

    }catch(error) {
        console.log(error);
        throw error;
    }
}

const findBlogById = async (postId: string): Promise<BlogResponseDto | null> => {
    try {
        const blog = await Blog.findById(postId);
        
        if (!blog) {
            return null;
        }

        return blog;
    } catch (error) {
        console.log(error);
        throw error;
    }
}

const deleteBlog = async (postId: string): Promise<void> => {
    try {
        await Blog.findByIdAndDelete(postId);
    } catch (error) {
        console.log(error);
        throw error;
    }
}

export default {
    createBlog,
    updateBlog,
    findBlogById,
    deleteBlog
}