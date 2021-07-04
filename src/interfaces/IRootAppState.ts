import { IPostsState } from './IPostsState';
import { ISelectedPostState } from './ISelectedPostState';

export interface IRootAppState {
  posts: IPostsState,
  selectedPost: ISelectedPostState,
  selectedUser: any,
}
