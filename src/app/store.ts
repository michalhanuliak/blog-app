import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import reduxLogger from 'redux-logger';

import postsReducer from './pages/home/slice';
import selectedPostReducer from './pages/post/slice';
import selectedUserReducer from './pages/user/slice';

export const store = configureStore({
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    serializableCheck: false,
  }).concat(reduxLogger),
  reducer: {
    posts: postsReducer,
    selectedPost: selectedPostReducer,
    selectedUser: selectedUserReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
ReturnType,
RootState,
unknown,
Action<string>
>;
