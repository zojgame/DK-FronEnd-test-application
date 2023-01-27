import {makeAutoObservable} from 'mobx';
class Modal{
    isModal = false;
    title = '';
    text = '';

    constructor(){
        makeAutoObservable(this);
    }

    changeModal(){
        this.isModal = !this.isModal;
    }

    setTitle(title : string){
        this.title = title;
    }

    setText(text : string){
        this.text = text;
    }

    clearFields(){
        this.text = '';
        this.title = '';
    }
}

const modal = new Modal();
export default modal;