import axios from "axios";
import { GOOGLE_BOOKS } from "./constants";
import { responseGoogleBooksApi } from "../models/response";

const GoogleBooksService = {
    search: async function(query: any) {
        return await axios.get<responseGoogleBooksApi>(`${GOOGLE_BOOKS.server}/books/v1/volumes?q=${query}`).then(response => response.data);
    }
};

export default GoogleBooksService;
