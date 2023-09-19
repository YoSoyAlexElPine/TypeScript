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


//Punto de rotura


type Bird = {fly: () => void };
type Fish = {swim: () => void };

function isFish (pet: Bird | Fish): pet is Fish{
    return (pet as Fish).swim!==undefined
}


function getFood(pet: Bird | Fish){
    if(isFish(pet)){
        pet
        return "Fish food"
    } else {
        pet
        return "Bird food"
    }

}
























