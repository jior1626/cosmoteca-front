import axios from "axios";

export default {
    search: function(query: any) {
        return axios.get("https://www.googleapis.com/books/v1/volumes?q=" + query);
    }
};
