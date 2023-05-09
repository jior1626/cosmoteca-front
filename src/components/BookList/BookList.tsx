import React, { useState, useEffect } from "react";

import "./BookList.css";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { booksSelector, setBooksInStorage } from "../../redux/states/book.slice";
import GoogleBooksService from "../../utils/API";
import { setLoading } from "../../redux/states/loading.slice";
import BookInfo from "./Book";
import { Book } from "../../models/book";

const BookList = () => {

    const dispatch = useAppDispatch();

    const { books, q } = useAppSelector(booksSelector);

    const loadBooks = async () => {
        await dispatch(setLoading(true));
        const response = await GoogleBooksService.search(q);
        await dispatch(setBooksInStorage(response))
        await dispatch(setLoading(false))
    }

    useEffect(() => {
        loadBooks()
    }, [])

    return (
        <>
            <section className='booklist'>
                <div className='container'>
                    <div className='section-title'>
                        <h2></h2>
                    </div>
                    <div className='booklist-content grid'>
                        {
                            books.slice(0, 50).map((item: Book, index) => {
                                return (
                                    <BookInfo key={index} book={item} />
                                )
                            })
                        }
                    </div>
                </div>
            </section>
        </>
    )

}

export default BookList;