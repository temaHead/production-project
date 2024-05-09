import { ReducersMapObject, configureStore } from '@reduxjs/toolkit';
import { counterReducer } from 'entites/Counter';
import { userReducer } from 'entites/User';
import { useDispatch } from 'react-redux';
import { StateSchema } from './StateSchema';
import { createReducerManager } from './reducesManager';

export function createReduxStore(initialState?: StateSchema, asyncReducers?: ReducersMapObject<StateSchema>) {
    const rootReducers: ReducersMapObject<StateSchema> = {
        ...asyncReducers,
        counter: counterReducer,
        user: userReducer,
    };

    const reducerManeger = createReducerManager(rootReducers);

    const store = configureStore<StateSchema>({
        reducer: reducerManeger.reduce,
        devTools: __IS_DEV__,
        preloadedState: initialState,
    });

    // @ts-ignore
    store.reducerManager = reducerManeger;
    return store;
}

// Infer the `RootState` and `AppDispatch` types from the store itself
// export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = ReturnType<typeof createReduxStore>['dispatch'];
// export const useAppDispatch = () => useDispatch<AppDispatch>();
