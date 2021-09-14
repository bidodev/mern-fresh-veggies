import { configureStore } from '@reduxjs/toolkit';
import shopReducer from '../features/shop/store/shopSlice';
import farmerReducer from '../features/farmer/store/farmerSlice';

export const store = configureStore({
    reducer: {
        shop: shopReducer,
        farmer: farmerReducer,
    }
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>

// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
