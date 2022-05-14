const message = {
    NULL_VALUE: '필요한 값이 없습니다.',
    NOT_FOUND: '존재하지 않는 자원',
    BAD_REQUEST: '잘못된 요청',
    INTERNAL_SERVER_ERROR: '서버 내부 오류',
    NULL_VALUE_TOKEN: '토큰이 없습니다', //추가
    INVALID_TOKEN: '잘못된 토큰입니다', //추가
    INVALID_PASSWORD: '비밀번호 오류',
    PASSWORD_DUPLICATED: '비밀번호 중복',

    //유저
    READ_USER_SUCCESS: '유저 조회 성공',
    CREATE_USER_SUCCESS: '유저 생성 성공',
    DELETE_USER_SUCCESS: '유저 삭제 성공',
    UPDATE_USER_SUCCESS: '유저 업데이트 성공',
    
    SIGNIN_USER_SUCCESS: '유저 로그인 성공',

    //블로그
    READ_POST_SUCCESS: '게시글 조회 성공',
    CREATE_POST_SUCCESS: '게시글 생성 성공',
    DELETE_POST_SUCCESS: '게시글 삭제성공',
    UPDATE_POST_SUCCESS: '게시글 업데이트 성공',

    //리뷰
    CREATE_REVIEW_SUCCESS: '리뷰 작성 성공',
    READ_REVIEW_SUCCESS: '리뷰 조회 성공',

    // 영화
    CREATE_MOVIE_SUCESS: '영화 생성 성공',
    CREATE_MOVIE_COMMENT_SUCCESS: '댓글 작성 성공',
    READ_MOVIE_SUCEESS: '영화 조회 성공',
}

export default message;