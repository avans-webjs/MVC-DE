


class LamaController
{
    createlamaview;
    listlamaview;
    lamaService;

    constructor(){
        this.lamaService = new LamaService();

        this.createlamaview =  new CreateLamaView(this);
        this.listlamaview = new ListLamaView(this);
        this.listlamaview.drawLamas(this.lamaService.getLamas());
    }

    addLama = function(data){
        this.lamaService.saveLama(new Lama(data));
        this.listlamaview.drawLamas(this.lamaService.getLamas());
    }

}