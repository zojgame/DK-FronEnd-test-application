import { makeAutoObservable } from "mobx";
import axios from "axios";
import { PostType } from "../types";

type PostsType = PostType[]

class Posts {
    currentPosts : PostsType = []
    allPosts : PostsType = [];
    constructor() {
        makeAutoObservable(this);
    }

    fetchToCurrentPage(page: number, limit: number){
        const getUrl = 'https://jsonplaceholder.typicode.com/posts';
        axios.get(`${getUrl}?_limit=${limit}&_page=${page}`)
        .then((resposnse) => resposnse.data)
        .then((data) => {
            this.currentPosts = data;
        })
    }
}

const posts = new Posts();
export default posts;