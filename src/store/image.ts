import {makeAutoObservable} from 'mobx';
class Images {
    selectedImage = '';
    constructor(){
        makeAutoObservable(this)
    }

    setSelectedImage(img: string){
        this.selectedImage = img;
    }
}

const images = new Images();
export default images;