import axios from "axios";
import { PostType } from "../types";

export const getCurrentPost = async (id: string) : Promise<PostType> => {
    const getPostURL = `https://jsonplaceholder.typicode.com/posts/${id}`;
    const response = await axios(getPostURL);
    
        return response.data;
}