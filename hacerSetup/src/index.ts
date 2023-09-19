class User {
    public name: string
    private email?: string
    private password:string
    readonly city: string="Madrir"

    constructor(name:string,password: string, email?: string){
        this.email=email;
        this.name=name;
        this.password=password;
    }

    cantar():string{
        return " Hola mi nombre es "+this.name
    }

}

const Alex=new User("Alex","machu@gmail.com")

var frase=Alex.cantar()

Alex.name;

export{}
