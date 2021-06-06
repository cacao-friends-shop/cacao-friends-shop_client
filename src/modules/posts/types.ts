// Posts 전체 조회시 응답 데이터 요소 타입
export type PostsType = {
  id: number;
  title: string;
  content: string;
  characterType: string;
  createdDateTime: string;
  likeCount: number;
  imageUrls: string[];
  numberOfComments: number;
  // TODO: 타입 수정
  // firstContent: FirstContent || null;
  firstContent: string | null;
};

// type FirstContent = {
//   nickname: string;
//   content: string;
// };

// Post id 조회시 응답 데이터 요소 타입
export type PostType = {
  id: number;
  title: string;
  content: string;
  characterType: string;
  createdDateTime: string;
  likeCount: number;
  imageUrls: string[];
  comments: Comment[];
};

type Comment = {
  id: number;
  postId: number;
  memberId: number;
  // TODO: 타입 수정
  // nickname: string;
  content: string;
  likeCount: number;
  createdDate: string;
};

// Posts 전체 조회시 타입
type PostsInitial = {
  data: PostsType[] | null;
  loading: boolean;
  error: Error | null;
};

// Post id 조회시 타입
type PostInitial = {
  data: PostType | null;
  loading: boolean;
  error: Error | null;
};

// 초기 타입
export type PostsState = {
  posts: PostsInitial;
  post: {
    [key: number]: PostInitial;
  };
};

// 포스트 추가시 요청 타입
export type AddPostType = {
  title: string;
  content: string;
  characterType: string;
  createdDateTime: string;
  imageUrls: string[] | null;
};

// 포스트 수정시 요청 타입
export type EditPostType = {
  id: number;
  title: string;
  content: string;
  characterType: string;
  createdDateTime: string;
  imageUrls: string[] | null;
};
