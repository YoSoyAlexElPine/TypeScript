"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class User {
    constructor(name, password, email) {
        this.city = "Madrir";
        this.email = email;
        this.name = name;
        this.password = password;
    }
    cantar() {
        return " Hola mi nombre es " + this.name;
    }
}
const Alex = new User("Alex", "machu@gmail.com");
var frase = Alex.cantar();
Alex.name;
