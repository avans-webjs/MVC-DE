class Lama
{
    // name;
    // age;
    // color;
    // powerlevel;
    // isGod;
    // superpower; //dropdown
    // canEvolve;
    // type;

    constructor(lamadata){
        Object.assign(this, lamadata);
    }
}

class LamaService
{
    getLamas()
    {
        return [
            new Lama({ name: "Jeroen", isKrokodil: true}),
            new Lama({ name: "Stijn"}),
            new Lama({ name: "Jim"})
        ]
    }

    saveLama(lama){
        console.log(lama);
    }
}

class ListLamaView
{
    template;

    //2 opties
    
    constructor(controller)
    {
        this.template = document.getElementById('lama_list');

        //denk eens na over deze regel
        //let lamas = controller.getLamas();

       
    }

    drawLamas(lamas){
        lamas.forEach(lama => {
            let lamael = document.createElement('div');
            lamael.className = "lama";
    
            let lamaname = document.createElement("span");
            lamaname.innerText = lama.name;

            lamael.appendChild(lamaname);

            this.template.appendChild(lamael);
        });
    }
}

class CreateLamaView
{
    template;
    checkbox;
    lamaform;

    constructor(controller){
        this.template = document.getElementById('create_lama');
        this.lamaform = document.getElementById('lama_form');
        this.checkbox = document.getElementById('isGod');
        
        //events
        this.checkbox.addEventListener('click', function(){
            document.getElementById("god_template").style.display = 
                this.checked ? "block" : "none";
        });

        this.lamaform.addEventListener('submit', function(e){
            e.preventDefault();
            controller.addLama({
                name: this.name.value,
                age: this.age.value,
                isGod: this.isGod.value,
                powerlevel: this.powerlevel.value,
                superpower: this.superpower.value
            })
        })
    }
}

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
    }

    getLamas = function()
    {
        return this.lamaService.getLamas();
    }
}

let controller = new LamaController();

