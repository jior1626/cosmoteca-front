import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// import { getItemLocalStorage, setItemLocalStorage } from "../../utilities/helpers";
import { RootState } from "../store";
import { Book } from "../../models/book";
import { getItemLocalStorage, setItemLocalStorage } from "../../utils/helper";
import { responseGoogleBooksApi } from "../../models/response";

export interface BooksState {
    books: Book[];
    favorities: Book[];
    q: string;
    error: string;
}

export const initialState: BooksState = {
    books: [],
    favorities: [],
    q: "the lost world",
    error: "",
}

const BookSlice = createSlice({
    name: "books",
    initialState,
    reducers: {
        setBooksInStorage: (state, { payload }: PayloadAction<responseGoogleBooksApi>) => {
            setItemLocalStorage("books", payload.items);
            state.books = payload.items;
        },
        getFavorities: (state) => {
            state.favorities = getItemLocalStorage("favorities");
        },
        addFavorities: (state, { payload }: PayloadAction<Book>) => {
            let find = state.favorities.find(item => item.id == payload.id)
            if (!find) {
                state.favorities = [...state.favorities, { ...payload }];
            }
            setItemLocalStorage("favorities", state.favorities);
        },
        deleteBookInFavorities: (state, { payload }: PayloadAction<string>) => {
            state.favorities = state.favorities.filter(item => item.id != payload);
            setItemLocalStorage("favorities", state.favorities);
        },
        error: (state, { payload }: PayloadAction<string>) => {
            state.error = payload;
        }
    }
})

export const { setBooksInStorage, addFavorities, deleteBookInFavorities, error } = BookSlice.actions

export const booksSelector = (state: RootState) => state.books

export default BookSlice.reducer;