
import { useNavigate } from "react-router-dom";

// Components and more
import Loader from "../Loader/Loader";
import BookInfo from "./../BookList/Book";
import { FaArrowLeft } from "react-icons/fa";
import { Book } from "../../models/book";
import "./Favorities.css";

// Redux
import { useAppSelector } from "../../redux/hooks";
import { loadingSelector } from "../../redux/states/loading.slice";

// Services
import { booksSelector } from "../../redux/states/book.slice";

const Favorities = () => {

    const navigate = useNavigate();

    const { favorities } = useAppSelector(booksSelector);

    const { isLoading } = useAppSelector(loadingSelector);

    if(isLoading) return <Loader />;

    return (
        <>
            <section className='booklist'>
                <div className='container'>
                    <div className='section-title'>
                        <button type='button' className='flex flex-c back-btn' onClick={() => navigate("/")}>
                            <FaArrowLeft size={22} />
                            <span className='fs-18 fw-6'>Go Back</span>
                        </button>
                        <h2 className="text-center">My favorities books</h2>
                    </div>
                    <div className='booklist-content grid'>
                        {
                            favorities.slice(0, 50).map((item: Book, index) => {
                                return (
                                    <BookInfo key={index} book={item} favorities={true}/>
                                )
                            })
                        }
                    </div>
                </div>
            </section>
        </>
    )

}

export default Favorities;