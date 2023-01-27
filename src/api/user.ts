import axios from "axios";
import { UserType } from "../types";

export const getCurrentUser = async (id: string) : Promise<UserType> => {
    const getUserURL = `https://jsonplaceholder.typicode.com/users/${id}`;
    const response = await axios(getUserURL);
    
        return response.data;
}