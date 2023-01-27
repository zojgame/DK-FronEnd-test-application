import HeaderComponent from "./Header";
import { Content } from "antd/es/layout/layout";
import { useEffect, useState } from "react";
import posts from "../store/posts";
import users from "../store/users";
import { observer } from "mobx-react-lite";
import '../styles.scss';
import PostComponent from "./Post";
import {Pagination} from 'antd'
import { useParams } from "react-router";
import { useNavigate } from "react-router";
import {Button} from "antd";
import ModalWindowComponent from "./ModalWindow";
import modal from "../store/modal";

const MainPageComponent  = observer(() => {
    const navigate = useNavigate();
    const {page} = useParams();
    const [currentPage, setCurrentPage] = useState(page === undefined ? 1 : Number(page));
    // const [modal, setModal] = useState(false);
    useEffect(() => {
        users.getUsers();
    }, []);

    useEffect(() => {
        posts.fetchToCurrentPage(currentPage, 10);
    }, [currentPage])

    const changePageHandler = (page : number) => {
        navigate(`/${page}`);
        setCurrentPage(page);
    }

    const addPostHandler = () => {
        modal.changeModal();
    }
    return (
    <>
        {modal.isModal ? <ModalWindowComponent/> : <></>}
        <HeaderComponent/>
            <Content className="main-page-content">
        <Button className="add-new-post-btn" type='primary' onClick={addPostHandler}>Добавить пост</Button>
                

                {posts.currentPosts.map((post) => {
                    return(
                        <PostComponent post={post} key={post.id}/> 
                    )
                })}
            <Pagination className='pagination' defaultCurrent={currentPage} total={100} onChange={changePageHandler}/>
            </Content>   
    </>
    )
}) 

export default MainPageComponent;