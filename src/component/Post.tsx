/* eslint-disable react-hooks/exhaustive-deps */
import { PostType } from "../types";
import {useEffect, useState} from 'react';
import users from "../store/users";
import { getRandomImg } from "../api/image";
import images from "../store/image";
import {Button} from 'antd';
import { useNavigate } from "react-router";

interface PostComponentProps {
    post: PostType,
}
const PostComponent = ({post} : PostComponentProps):JSX.Element => {
    const [image, setImage] = useState('');
    const currentUser = users.users.filter(user => user.id === post.userId)[0];
    const navigateTo = useNavigate();
    useEffect(() => {
        if(image === '')   
        {
            getRandomImg().then(d => setImage(d));
        }     
    }, [])

    const onBtnClickHandler = () => {
        images.setSelectedImage(image);
        navigateTo(`../detailed/${post.id}/${currentUser.id}`)
    }

   return (
       <div className="post">
        
        <h1 className="title">{post.title}</h1>
        <div className="post-container">
            <p className="name">{currentUser.name}</p>
            <Button className="to-detailed-post-btn" type='link' onClick={onBtnClickHandler}>Перейти к посту</Button>

        </div>
            <img className='post-image' src={image} alt=''/>
       </div>
   );
};
export default PostComponent;
