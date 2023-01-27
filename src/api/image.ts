import axios from "axios";

export const getRandomImg = async ()  => {
    const getPostURL = 'https://picsum.photos/1500/1500.jpg?random=${id}';
    const response = await axios.get(getPostURL);
    
        return response.request.responseURL;
}