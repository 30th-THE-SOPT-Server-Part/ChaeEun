import { MovieInfo } from "../movie/MovieInfo";

export interface ReviewResponseDto {
    writer: string;
    movie: MovieInfo; // movie에 대한 모든 정보를 줄거라서
    title: string;
    content: string;
}