import React, {useState} from "react";
import "./Search.css";

// Redux
import { useAppDispatch } from "../../redux/hooks";
import { setBooksInStorage } from "../../redux/states/book.slice";
import { setLoading } from "../../redux/states/loading.slice";

// Libraries
import { FaSearch } from "react-icons/fa";

// Service Google Books
import GoogleBooksService from "../../utils/API";


const Search = () => {

    const [filter, setFilter] = useState("the lost world");

    const dispatch = useAppDispatch();

    const handleSubmit = async (e: any) => {
        e.preventDefault();
        await dispatch(setLoading(true));
        const response = await GoogleBooksService.search(filter);
        await dispatch(setBooksInStorage(response))
        await dispatch(setLoading(false))
    }

    return (
        <div className='search-form'>
            <div className='container'>
                <div className='search-form-content'>
                    <form className='search-form' onSubmit={handleSubmit}>
                        <div className='search-form-elem flex flex-sb bg-white'>
                            <input type="text" className='form-control' placeholder='The Lost World ...' onChange={(e) => setFilter(e.target.value)} />
                            <button type="submit" className='flex flex-c' onClick={handleSubmit}>
                                <FaSearch className='text-purple' size={32} />
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )

}

export default Search;