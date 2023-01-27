import axios from 'axios';
import {makeAutoObservable} from 'mobx';
import { UserType } from '../types';

class Users {
  
    users : UserType[] = [];

    constructor(){
        makeAutoObservable(this);
    }

    getUsers(){
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then(res => res.data)
        .then(users => this.users = users);
    }
}

const users = new Users();
export default users;
