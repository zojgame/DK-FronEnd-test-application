import { Button, Form, Input } from 'antd';
import modal from '../store/modal';
import { sendPost } from '../api/modal';

const ModalWindowComponent = () => {
    const closeModalHandler = () => {
        modal.changeModal();
    }

    const addPostHandler = () => {
        sendPost(modal.text, modal.title).then(json => console.log(json));
        modal.clearFields();
        modal.changeModal();
    }

    const titleChangeHandler = (event: any) => {
        modal.setTitle(event.target.value);
    }

    const textChangeHandler = (event: any) => {
        modal.setText(event.target.value);
    }

   return (
    <div className="modal-window-blur">
        <div className="modal-window">
        <Button type='link' className='close-modal-btn' onClick={closeModalHandler}>Назад</Button>
            <h1 className='modal-title'>Создание поста</h1>            
            <Form
                name="basic"
                labelCol={{ span: 5 }}
                wrapperCol={{ span: 16 }}
                style={{ maxWidth: 700 }}
                initialValues={{ remember: true }}
                autoComplete="off"
                
            >
                <Form.Item
                label="Заголовок"
                name="title"
                rules={[{  message: 'Введите заголовок' }]}
                >
                <Input onChange={titleChangeHandler}/>
                </Form.Item>

                <Form.Item
                label="Текст"
                name="text"
                rules={[{message: 'Введите текст поста' }]}
                >

                <Input.TextArea onChange={textChangeHandler}/>
                </Form.Item>

                <Form.Item wrapperCol={{ offset: 10, span: 26 }}>
                <Button type="primary" htmlType="submit" onClick={addPostHandler}>
                    Создать пост
                </Button>
                </Form.Item>
            </Form>
       </div>
    </div>
       
   );
};
export default ModalWindowComponent; 