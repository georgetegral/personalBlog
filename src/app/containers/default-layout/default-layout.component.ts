import {Component, TemplateRef, ViewChild } from '@angular/core';
import { navItems } from '../../_nav';
import { AngularFireDatabase } from '@angular/fire/database';
import { FormControl, Validators } from '@angular/forms';
import { AppComponent } from '../../app.component';
import { BsModalService, ModalDirective } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './default-layout.component.html'
})
export class DefaultLayoutComponent {
  public sidebarMinimized = false;
  public navItems = navItems;
  year: number = new Date().getFullYear();
  modalRef: BsModalRef;
  @ViewChild('langInit') langInit: TemplateRef<any>;

  nameF: FormControl;
  mailF: FormControl;
  subjF: FormControl;
  messF: FormControl;

  constructor(private afDB: AngularFireDatabase, private appComponent: AppComponent, private modalService: BsModalService){
    this.nameF = new FormControl('',[Validators.required]);
    /*
    this.nameF.valueChanges
      .subscribe(value => {
        console.log(value);
      });
    */
    this.mailF = new FormControl('',[
      Validators.required,
      Validators.pattern(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/)
    ]);
    this.subjF = new FormControl('',[Validators.required]);
    this.messF = new FormControl('',[Validators.required]);
  }

  ngAfterViewInit() {
    if(!this.getCookie('language')){
      //Mostrar modal
      setTimeout(() => {this.openModal(this.langInit)}, 1000);
      console.log("Cookie does not exist.")
    } else {
      console.log("Changed translate value to cookie value");
      this.useLanguage(this.getCookie('language'));
    }
  }

  sendForm(template: TemplateRef<any>){
    var id = Date.now();
    this.afDB.database.ref('messages/'+id+'/name').set(this.nameF.value);
    this.afDB.database.ref('messages/'+id+'/email').set(this.mailF.value);
    this.afDB.database.ref('messages/'+id+'/subject').set(this.subjF.value);
    this.afDB.database.ref('messages/'+id+'/message').set(this.messF.value);
    this.modalRef = this.modalService.show(template,{ backdrop: 'static', keyboard: false });
    this.nameF.setValue("");  this.nameF.reset();
    this.mailF.setValue("");  this.mailF.reset();
    this.subjF.setValue("");  this.subjF.reset();
    this.messF.setValue("");  this.messF.reset();
  }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template,{ backdrop: 'static', keyboard: false });
  }

  useLanguage(language: string) {
    this.appComponent.useLanguage(language);
    this.setCookie('language',language);
  }

  getLanguage(){
    return this.appComponent.getLanguage();
  }

  setCookie(cName, cValue){
    this.appComponent.setCookie(cName, cValue);
    console.log("language cookie set to: ",cValue)
  }

  getCookie(cName){
    return this.appComponent.getCookie(cName);
  }

  goToLink(url: string){
    window.open(url, "_blank");
  }

  toggleMinimize(e) {
    this.sidebarMinimized = e;
  }
}
