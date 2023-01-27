import HeaderComponent from "./Header";
import { Content } from "antd/es/layout/layout";
import '../styles.scss';
import { useParams } from "react-router";
import { getCurrentPost } from "../api/post";
import { getCurrentUser } from "../api/user";
import {useEffect} from 'react';
import { UserType, PostType } from "../types";
import {useState} from 'react';
import images from "../store/image";
import {Button} from 'antd';
import { useNavigate } from "react-router";

const DetailedPostComponent = () => {
    const { userId, id } = useParams();
    const [user, setUser] = useState<UserType>();
    const [post, setPost] = useState<PostType>();
    const navigate = useNavigate();

    useEffect(() => {
        getCurrentPost(id as string).then(d => setPost(d))
    }, [id])

    useEffect(() => {
        getCurrentUser(userId as string).then(d => setUser(d))
    }, [userId]);

    const handleBtnClick = () => {
        navigate(-1)
    }   
    
   return (
    <>
        <HeaderComponent/>
        <Content className="detailed-content">
            
            <h1 className="title-detailed">{post?.title}</h1>

            <div className="detailed-post-container">
                <div className="username-post">{user?.name}</div>
                <Button className="go-to-main-page" type="link" onClick={handleBtnClick}>Вернуться</Button>
            </div>
            <div className="text-detailed">{post?.body}</div>
            <img className='post-detailed-image' src={images.selectedImage} alt=''/>
        </Content>   
    </>
   );
};
export default DetailedPostComponent; 