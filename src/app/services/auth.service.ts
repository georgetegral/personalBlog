import { Injectable } from "@angular/core";
import { AngularFireAuth } from '@angular/fire/auth';

@Injectable()

export class AuthService{

    constructor(private angularFireAuth:AngularFireAuth){
        this.isLogged();
    }

    public login = (password) =>{
        this.angularFireAuth.auth.signInWithEmailAndPassword('georgetegral@gmail.com', password)
            .then(() => {
                alert('¡Bienvenido, Jorge!');
            })
            .catch((error) => {
                alert('Contraseña Incorrecta');
                console.log(error);
            });
    };

    public isLogged(){
        return this.angularFireAuth.authState;
    };

    public logout(){
        this.angularFireAuth.auth.signOut();
        alert('Sesión cerrada');
    }
    
}