import { IPostsState } from './IPostsState';
import { ISelectedPostState } from './ISelectedPostState';
import { ISelectedUserState } from './ISelectedUserState';

export interface IRootAppState {
  posts: IPostsState,
  selectedPost: ISelectedPostState,
  selectedUser: ISelectedUserState,
}
