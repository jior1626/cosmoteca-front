import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";

import  LoadingReducer  from './states/loading.slice';
import  BooksReducer  from './states/book.slice';

export const store = configureStore({
    reducer: {
		loading: LoadingReducer,
        books: BooksReducer
    }
})

export type AppDispatch = typeof store.dispatch;
export type RootState =  ReturnType<typeof store.getState>
export type AppThunk<ReturnType = void> = ThunkAction<
	ReturnType,
	RootState,
	unknown,
	Action<string>
>;