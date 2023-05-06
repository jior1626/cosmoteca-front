import React, {useRef, useState} from "react";
import { useNavigate } from "react-router-dom";

import { Container, Row, Col } from "react-bootstrap";

import "./Search.css";


const Search: React.FC<any> = ({ }) => {

    const [filter, setFilter] = useState("");

    const searchText = useRef('');
    const navigate = useNavigate();

    const handleSubmit = (e: any) => {
        e.preventDefault();
        // let tempSearchTerm = searchText.current.value.trim();
        // if((tempSearchTerm.replace(/[^\w\s]/gi,"")).length === 0){
        //   setSearchTerm("the lost world");
        //   setResultTitle("Please Enter Something ...");
        // } else {
        //   setSearchTerm(searchText.current.value);
        // }
    
        navigate("/book");
      };

    return (
        <div className='search-form'>
            <div className='container'>
                <div className='search-form-content'>
                    <form className='search-form' onSubmit={handleSubmit}>
                        <div className='search-form-elem flex flex-sb bg-white'>
                            <input type="text" className='form-control' placeholder='The Lost World ...' />
                            <button type="submit" className='flex flex-c' onClick={handleSubmit}>
                                {/* <FaSearch className='text-purple' size={32} /> */}
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )

}

export default Search;