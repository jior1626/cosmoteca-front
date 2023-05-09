import React from 'react';
import { Link } from 'react-router-dom';

// Assets and styles
import "./BookList.css";
import coverImg from "../../assets/images/cover_not_found.jpg";

//Libraries
import { Button } from "react-bootstrap";

// Redux
import { useAppDispatch } from '../../redux/hooks';

// Models
import { Book } from '../../models/book';
import { deleteBookInFavorities } from '../../redux/states/book.slice';


interface BookInterface {
    book: Book,
    favorities?: boolean
}

const BookInfo: React.FC<BookInterface> = ({book, favorities}) => {

    const dispatch = useAppDispatch();

    const deleteFavority = async (id: string = "") => {
        if(id) {
            await dispatch(deleteBookInFavorities(id));
        }
    }

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
                {
                    favorities ?
                        <div className='book-item-info-item publish-year fs-15'>
                            <Button onClick={() => deleteFavority(book.id)} size="lg" variant="outline-danger">
                                delete
                            </Button>
                        </div>
                    : <></>
                }
                
            </div>
        </div>
    )
}

export default BookInfo