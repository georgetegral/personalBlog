import { Injectable } from "@angular/core";
import { AngularFireDatabase } from '@angular/fire/database';

@Injectable()

export class MessagesService{
    constructor(private afDB: AngularFireDatabase){}

    public getMessages(){
        return this.afDB.list('messages/').valueChanges();
    }
}