const enum CastillaLaMancha {
    ALBACETE,
    GUADALAJARA,
    CUENCA,
    TOLEDO,
    CIUDAD_REAL
}


let array: (string | number)[]=["hola"];
let array2: number[]=[];


type User = {
    readonly _id:number;
    name: string;
    email: string;
    isActive: boolean;
}

const alex2: User={  
    _id:69,
    email: "ale@gamil.com",
    name: "alex",
    isActive: true,
};

function createUser (_id: number,name:string,email:string,isActive:boolean):User {
    return {_id: 32,name: "Alax",email: "String",isActive:true}
}

let alex3: User=createUser(34,"caca","caca@gmail.com",true)

let alex: User = {
    _id:69,
    name: "alex",
    email: "ale@gamil.com",
    isActive: true,

}

alex3.email;

export{}

