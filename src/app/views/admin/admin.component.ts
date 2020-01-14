import { Component, NgModule } from '@angular/core';

// My imports
import { TranslateModule } from '@ngx-translate/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { FormsModule, ReactiveFormsModule, FormControl, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../services/auth.service';
import { MessagesService } from '../../services/messages.service';

@Component({
  templateUrl: './admin.component.html'
})
@NgModule({
  imports: [
    TranslateModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule
  ],
  declarations: [ AdminComponent ],
  exports: []
})
export class AdminComponent {
  passAdmin: FormControl;
  loggedIn = false;
  messages = null;
  error:string = null;

  constructor(private afDB: AngularFireDatabase, private authService:AuthService, private messagesService:MessagesService){
    this.passAdmin = new FormControl('',[Validators.required]);

    this.authService.isLogged()
      .subscribe((result) =>{
        if(result && result.uid){
          this.loggedIn = true;
        } else {
          this.loggedIn = false;
        }
      }, (error) =>{
        this.loggedIn = false;
      })

      messagesService.getMessages().subscribe(messages => {
        this.messages = messages;
        //El 'me = this' es porque el this dentro de map es diferente del this afuera del map.
        var me = this;
        me.messages  = Object.keys(me.messages).map(function (key) { return me.messages [key]; });
      }, error => {
        console.log(error);
        var text = 'No se pudieron obtener los mensajes. Error: '+error.statusText;
        this.error = text;
      }
      );
      
  }

  login(){
    this.authService.login(this.passAdmin.value);
    this.passAdmin.reset();
  }

  isLogged(){
    return this.authService.isLogged();
  }

  logout(){
    this.authService.logout();
  }

}