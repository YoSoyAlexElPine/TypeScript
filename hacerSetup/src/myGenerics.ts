function retorno <e>(valor:e): e{
    return valor;
}

var a = retorno("aa")

const sumar = (a:number,b:number) => {
    return a+b
}

interface User {
    name:string,
    email:string
}

interface Admin extends User{
    isAdmin:boolean
}