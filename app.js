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

    }
}

let lamaService = new LamaService();
let lamas = lamaService.getLamas();
console.log(lamas);


class CreateLamaView
{
    template;
    checkbox;

    constructor(){
        this.template = document.getElementById('create_lama');

        this.checkbox = document.getElementById('isGod');
        this.checkbox.addEventListener('click', function(){
            //console.log(this.checked);
            //maak de velden on/zichtbaar
        });
    }
}


let createLamaView = new CreateLamaView();
