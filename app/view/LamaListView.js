
export class ListLamaView
{
    
    constructor(controller)
    {
        this.template = document.getElementById('lama_list');       
    }

    drawLamas(lamas){
        this.template.innerText = "";   
        
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