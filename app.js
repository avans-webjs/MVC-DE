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
                age: this.age.value
            })
        })
    }
}

class LamaController
{
    createlamaview;
    lamaService;

    constructor(){
        this.createlamaview =  new CreateLamaView(this);
        this.lamaService = new LamaService();
    }

    addLama = function(data){
        this.lamaService.saveLama(new Lama(data));
    }
}

let controller = new LamaController();

