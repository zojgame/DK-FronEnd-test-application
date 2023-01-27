import axios from "axios";

export const sendPost = async (title : string, text : string ) => {
    const postModalPostURL = `https://jsonplaceholder.typicode.com/posts`;
    const response = await axios.post(postModalPostURL, {
        headers: {

        },
        title: title,
        text: text        
    });
    
        return response.data;
}