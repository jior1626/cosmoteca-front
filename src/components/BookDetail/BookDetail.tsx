import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "./BookDetail.css";

// Components and more
import Loader from "../Loader/Loader";

import { Book } from "../../models/book";
import coverImg from "../../assets/images/cover_not_found.jpg";
import { Row, Button } from "react-bootstrap"
import { FaArrowLeft } from "react-icons/fa";

// Redux
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { loadingSelector, setLoading } from "../../redux/states/loading.slice";

// Services
import GoogleBooksService from "../../utils/API";
import { addFavorities } from "../../redux/states/book.slice";

const BookDetail = () => {

    const { id } = useParams();

    const [book, setBook] = useState<Book>({});

    const { isLoading } = useAppSelector(loadingSelector);

    const dispath = useAppDispatch();

    const navigate = useNavigate();

    const searchBook = async () => {
        await setLoading(true);
        try {

            if(id) {
                const response = await GoogleBooksService.searchById(id);
                if (response) {
                    setBook(response);
                } else {
                    setBook({});
                }
                await setLoading(false);
            }
        } catch (error) {
            console.log(error);
            await setLoading(false);
        }
    }

    const addFavority = async (book: Book) => {
        await dispath(addFavorities(book));
    } 

    useEffect(() => {
        searchBook();
    }, [id]);

    if (isLoading) return <Loader />;

    return (
        <section className='book-details'>
            <div className='container'>
                <button type='button' className='flex flex-c back-btn' onClick={() => navigate("/")}>
                    <FaArrowLeft size={22} />
                    <span className='fs-18 fw-6'>Go Back</span>
                </button>

                <div className='book-details-content grid'>
                    <div className='book-details-img'>
                        <img src={book.volumeInfo?.imageLinks?.thumbnail ? book.volumeInfo?.imageLinks?.thumbnail : coverImg} alt="cover img" />
                    </div>
                    <div className='book-details-info'>
                        <div className='book-details-item title'>
                            <span className='fw-6 fs-24'>{book.volumeInfo?.title ? book.volumeInfo?.title : ""}</span>
                        </div>
                        <div className='book-details-item description'>
                            <span>{book.volumeInfo?.description ? book.volumeInfo?.description : ""}</span>
                        </div>
                        
                        <div className='book-details-item'>
                            <span className='fw-6'>Published Date:  </span>
                            <span className='text-italic'>{book.volumeInfo?.publishedDate}</span>
                        </div>
                        <div className='book-details-item'>
                            <span className='fw-6'>Publisher: </span>
                            <span>{book.volumeInfo?.publisher}</span>
                        </div>
                        <div className='book-details-item'>
                            <span className='fw-6'>Pages: </span>
                            <span className='text-italic'>{book.volumeInfo?.pageCount}</span>
                        </div>
                        <div className='book-details-item'>
                            <span className='fw-6'>Rating: </span>
                            <span className='text-italic'>{book.volumeInfo?.averageRating}</span>
                        </div>
                        <Row>
                            <Button onClick={() => addFavority(book)} size="lg" variant="outline-primary">Add Favorities</Button>
                        </Row>
                    </div>
                    
                </div>
            </div>
        </section>
    )

}

export default BookDetail;