import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// import { getItemLocalStorage, setItemLocalStorage } from "../../utilities/helpers";
import { RootState } from "../store";
import { Book } from "../../models/book";
import { getItemLocalStorage, setItemLocalStorage } from "../../utils/helper";
import { responseGoogleBooksApi } from "../../models/response";

export interface BooksState {
    books: Book[];
    q: string;
    error: string;
    bookCreated: boolean;
}

export const initialState: BooksState = {
    books: [],
    q: "the lost world",
    bookCreated: false,
    error: "",
}

const BookSlice = createSlice({
    name: "books",
    initialState,
    reducers: {
        setBooksInStorage: (state, { payload }: PayloadAction<responseGoogleBooksApi>) => {
            // let booksInLocalStorage = getItemLocalStorage("books");
            // if (booksInLocalStorage && booksInLocalStorage.length > 0) {
            //     state.books = booksInLocalStorage;
            // } else {
                setItemLocalStorage("books", payload.items);
                state.books = payload.items;
            // }
        },
        // filterBooks: (state, { payload }: PayloadAction<string>) => {
        //     state.q = payload;
        // },
        addBook: (state, { payload }: PayloadAction<Book>) => {
            state.books = [...state.books, { ...payload }];
            state.bookCreated = true;
            // setItemLocalStorage("books", state.books);
        },
        updateBook: (state, { payload }: PayloadAction<Book>) => {
            let bookFill = state.books.filter(item => item.id !== payload.id);
            state.books = [...bookFill, payload];
            // setItemLocalStorage("books", state.books);
        },
        deleteBookById: (state, { payload }: PayloadAction<string>) => {
            state.books = state.books.filter(item => item.id != payload);
            // setItemLocalStorage("books", state.books);
        },
        error: (state, { payload }: PayloadAction<string>) => {
            state.error = payload;
        }
    }
})

export const { setBooksInStorage, addBook, updateBook, deleteBookById } = BookSlice.actions

export const booksSelector = (state: RootState) => state.books

export default BookSlice.reducer;