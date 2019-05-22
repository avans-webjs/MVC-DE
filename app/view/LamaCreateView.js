
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