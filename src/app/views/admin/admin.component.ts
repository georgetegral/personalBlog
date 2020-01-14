import { Component, NgModule } from '@angular/core';

// My imports
import { TranslateModule } from '@ngx-translate/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { FormsModule, ReactiveFormsModule, FormControl, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../services/auth.service';

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

  constructor(private afDB: AngularFireDatabase, private authService:AuthService){
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