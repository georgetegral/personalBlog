import { Component, OnInit, TemplateRef } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { CookieService } from 'ngx-cookie-service';

@Component({
  // tslint:disable-next-line
  selector: 'body',
  template: '<router-outlet></router-outlet>'
})
export class AppComponent implements OnInit {
  modalRef: BsModalRef;

  constructor(private router: Router, private translate: TranslateService, private modalService: BsModalService, private cookieService: CookieService) { 
    translate.setDefaultLang('en');
  }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template,{ backdrop: 'static', keyboard: false });
  }

  getLanguage(){
    if(this.translate.currentLang != "en" && this.translate.currentLang != "es"){
      this.translate.currentLang="en";
    }
    return this.translate.currentLang;
  }

  useLanguage(language: string) {
    this.translate.use(language);
  }

  setCookie(cName, cValue){
    this.cookieService.set(cName,cValue);
  }

  getCookie(cName){
    return this.cookieService.get(cName);
  }

  ngOnInit() {
    this.router.events.subscribe((evt) => {
      if (!(evt instanceof NavigationEnd)) {
        return;
      }
      window.scrollTo(0, 0);
    });
  }
}
