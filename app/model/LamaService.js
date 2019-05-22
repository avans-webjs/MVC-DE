class LamaService
{
    lamas =   [
        new Lama({ name: "Jeroen", isKrokodil: true}),
        new Lama({ name: "Stijn"}),
        new Lama({ name: "Jim"})
    ]

    getLamas()
    {
        return this.lamas;
    }

    saveLama(lama){
       this.lamas.push(lama);
    }
}