import React, {useRef, useState, useEffect} from "react";
import "./Search.css";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { setBooksInStorage } from "../../redux/states/book.slice";
import { setLoading } from "../../redux/states/loading.slice";
import GoogleBooksService from "../../utils/API";


import { FaSearch } from "react-icons/fa";


const Search: React.FC<any> = ({ }) => {

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