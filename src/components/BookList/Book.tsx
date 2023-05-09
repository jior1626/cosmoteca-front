import React from 'react';
import { Link } from 'react-router-dom';
import "./BookList.css";
import { Book } from '../../models/book';

import coverImg from "../../assets/images/cover_not_found.jpg";

interface BookInterface {
    book: Book
}

const BookInfo: React.FC<any> = ({book}) => {
    return (
        <div className='book-item flex flex-column flex-sb'>
            <div className='book-item-img'>
                <img src={book.volumeInfo?.imageLinks?.thumbnail ? book.volumeInfo?.imageLinks?.thumbnail : coverImg} alt="cover" />
            </div>
            <div className='book-item-info text-center'>
                <Link to={`/book/${book.id}`} {...book}>
                    <div className='book-item-info-item title fw-7 fs-18'>
                        <span>{book.volumeInfo?.title ? book.volumeInfo?.title : ""}</span>
                    </div>
                </Link>

                <div className='book-item-info-item author fs-15'>
                    <span className='text-capitalize fw-7'>Author: </span>
                    <span>{ book.volumeInfo?.authors ? book.volumeInfo?.authors?.join(", ") : ""}</span>
                </div>

                <div className='book-item-info-item publish-year fs-15'>
                    <span className='text-capitalize fw-7'>First Publish Year: </span>
                    <span>{book.volumeInfo?.publishedDate ? book.volumeInfo?.publishedDate : ""}</span>
                </div>
            </div>
        </div>
    )
}

export default BookInfo