
import { LamaService } from '../model/LamaService'
import { CreateLamaView } from '../view/LamaCreateView';
import { ListLamaView } from '../view/LamaListView';

export default class LamaController
{
    //this is the constructor
    constructor(){
        this.lamaService = new LamaService();
        this.createlamaview =  new CreateLamaView(this);
        this.listlamaview = new ListLamaView(this);
        this.listlamaview.drawLamas(this.lamaService.getLamas());
    }

    addLama(data){
        this.lamaService.saveLama(new Lama(data));
        this.listlamaview.drawLamas(this.lamaService.getLamas());
    }

}