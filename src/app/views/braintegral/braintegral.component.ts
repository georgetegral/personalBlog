import { Component, NgModule } from '@angular/core';

// My imports
import { TranslateModule } from '@ngx-translate/core';
import { TemplateRef } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { FormsModule, ReactiveFormsModule, FormControl, Validators } from '@angular/forms';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { CommonModule } from '@angular/common';

@Component({
  templateUrl: './braintegral.component.html'
})
@NgModule({
  imports: [
    TranslateModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule
  ],
  declarations: [ BraintegralComponent ],
  exports: []
})
export class BraintegralComponent {
  mailB: FormControl;
  modalRefB: BsModalRef;

  constructor(private afDB: AngularFireDatabase, private modalService: BsModalService){
    this.mailB = new FormControl('',[
      Validators.required,
      Validators.pattern(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/)
    ]);
  }

  sendFormBraintegral(template: TemplateRef<any>){
    var id = Date.now();
    this.afDB.database.ref('mailList/'+id+'/').set(this.mailB.value);
    this.modalRefB = this.modalService.show(template,{ backdrop: 'static', keyboard: false });
    this.mailB.setValue("");  this.mailB.reset();
  }

  goToLink(url: string){
    window.open(url, "_blank");
  }

}