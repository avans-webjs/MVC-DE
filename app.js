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
    constructor(){
        
    }
}
