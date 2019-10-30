const initialState = {
  mainPosts: [
    {
      id: 1,
      User: {
        id: 1,
        nickname: 'piknow',
      },
      content: '첫 번째 게시글',
      img:
        'https://bookthumb-phinf.pstatic.net/cover/137/995/13799585.jpg?udate=20180726',
      Comments: [],
    },
  ], // 화면에 보일 포스트들
  imagePaths: [], // 미리보기 이미지 경로
  addPostErrorReason: '', // 포스트 업로드 실패 사유
  isPostAdding: false, // 포스트 업로드 중
  isPostAdded: false, // 포스트 업로드 성공
  isCommentAdding: false, // 댓글 업로드 중
  isCommentAdded: false, // 댓글 업로드 성공
  addCommentErrorReason: '', // 댓글 업로드 실패 사유
};

const dummyPost = {
  id: 2,
  User: {
    id: 1,
    nickname: 'Q',
  },
  content: '이것은 더미 콘텐츠 입니다.',
  Comments: [],
};

const dummyComment = {
  id: 1,
  User: {
    id: 1,
    nickname: 2,
  },
  createdAt: new Date(),
  content: '더미 댓글입니다.',
};

export const LOAD_MAIN_POSTS_REQUEST = 'LOAD_MAIN_POSTS_REQUEST';
export const LOAD_MAIN_POSTS_SUCCESS = 'LOAD_MAIN_POSTS_SUCCESS';
export const LOAD_MAIN_POSTS_FAILURE = 'LOAD_MAIN_POSTS_FAILURE';

export const LOAD_HASHTAG_POSTS_REQUEST = 'LOAD_HASHTAG_POSTS_REQUEST';
export const LOAD_HASHTAG_POSTS_SUCCESS = 'LOAD_HASHTAG_POSTS_SUCCESS';
export const LOAD_HASHTAG_POSTS_FAILURE = 'LOAD_HASHTAG_POSTS_FAILURE';

export const LOAD_USER_POSTS_REQUEST = 'LOAD_USER_POSTS_REQUEST';
export const LOAD_USER_POSTS_SUCCESS = 'LOAD_USER_POSTS_SUCCESS';
export const LOAD_USER_POSTS_FAILURE = 'LOAD_USER_POSTS_FAILURE';

export const UPLOAD_IMEAGES_REQUEST = 'UPLOAD_IMEAGES_REQUEST';
export const UPLOAD_IMEAGES_SUCCESS = 'UPLOAD_IMEAGES_SUCCESS';
export const UPLOAD_IMEAGES_FAILURE = 'UPLOAD_IMEAGES_FAILURE';

// 비동기 아님
export const REMOVE_IMEAGE = 'REMOVE_IMEAGE';

export const ADD_POST_REQUEST = 'ADD_POST_REQUEST';
export const ADD_POST_SUCCESS = 'ADD_POST_SUCCESS';
export const ADD_POST_FAILURE = 'ADD_POST_FAILURE';

export const LIKE_POST_REQUEST = 'LIKE_POST_REQUEST';
export const LIKE_POST_SUCCESS = 'LIKE_POST_SUCCESS';
export const LIKE_POST_FAILURE = 'LIKE_POST_FAILURE';

export const UNLIKE_POST_REQUEST = 'UNLIKE_POST_REQUEST';
export const UNLIKE_POST_SUCCESS = 'UNLIKE_POST_SUCCESS';
export const UNLIKE_POST_FAILURE = 'UNLIKE_POST_FAILURE';

export const ADD_COMMENT_REQUEST = 'ADD_COMMENT_REQUEST';
export const ADD_COMMENT_SUCCESS = 'ADD_COMMENT_SUCCESS';
export const ADD_COMMENT_FAILURE = 'ADD_COMMENT_FAILURE';

export const LOAD_COMMENT_REQUEST = 'LOAD_COMMENT_REQUEST';
export const LOAD_COMMENT_SUCCESS = 'LOAD_COMMENT_SUCCESS';
export const LOAD_COMMENT_FAILURE = 'LOAD_COMMENT_FAILURE';

export const RETWEET_POST_REQUEST = 'RETWEET_POST_REQUEST';
export const RETWEET_POST_SUCCESS = 'RETWEET_POST_SUCCESS';
export const RETWEET_POST_FAILURE = 'RETWEET_POST_FAILURE';

export const REMOVE_POST_REQUEST = 'REMOVE_POST_REQUEST';
export const REMOVE_POST_SUCCESS = 'REMOVE_POST_SUCCESS';
export const REMOVE_POST_FAILURE = 'REMOVE_POST_FAILURE';

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST_REQUEST: {
      return {
        ...state,
        isPostAdding: true,
        addPostErrorReason: '',
        isPostAdded: false,
      };
    }
    case ADD_POST_SUCCESS: {
      return {
        ...state,
        isPostAdding: false,
        mainPosts: [dummyPost, ...state.mainPosts],
        isPostAdded: true,
      };
    }
    case ADD_POST_FAILURE: {
      return {
        ...state,
        isPostAdding: false,
        addPostErrorReason: action.error,
      };
    }
    case ADD_COMMENT_REQUEST: {
      return {
        ...state,
        isCommentAdding: true,
        addCommentErrorReason: '',
        isCommentAdded: false,
      };
    }
    case ADD_COMMENT_SUCCESS: {
      const postIndex = state.mainPosts.findIndex(
        mainPost => mainPost.id === action.data.postId
      );
      const post = state.mainPosts[postIndex];
      const Comments = [...post.Comments, dummyComment];
      const mainPosts = [...state.mainPosts];
      mainPosts[postIndex] = { ...post, Comments };
      return {
        ...state,
        isCommentAdding: false,
        mainPosts,
        isCommentAdded: true,
      };
    }
    case ADD_COMMENT_FAILURE: {
      return {
        ...state,
        isCommentAdding: false,
        addCommentErrorReason: action.error,
      };
    }
    default: {
      return state;
    }
  }
};
