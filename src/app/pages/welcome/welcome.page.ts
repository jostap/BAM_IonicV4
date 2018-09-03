import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { Validators, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage';
import { User } from './../../shared/user';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.page.html',
  styleUrls: ['./welcome.page.scss'],
})
export class WelcomePage implements OnInit {

  loginForm: FormGroup;
  user: User;
  errMess: any;
  alertTitle: string;
  alertMessage: string;
  token: string;

  constructor(
    private userService: UserService,
    public formBuilder: FormBuilder,
    public storage: Storage,
    private alertCtrl: AlertController,
    public router: Router) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      username: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required)
    });

    this.storage.get('token').then(token => {
      if(token) {
        this.token = token;
        this.goToTabs();
        console.log('[INFO] ...... Token: ', token)
      }
      else {
        console.log('[INFO] ...... No logged');
      }
    }).catch();

  }

  goToTabs() {
    this.router.navigate(['/tabs']);
  }

  login(value){
    this.goToTabs(); // TO DELETE after test
    let username = value.username;
    let password = value.password;

    console.log(username, password);

    this.userService.loginUser(username, password)
    .subscribe(
      data => {
        if (data) {
          let body = JSON.parse(JSON.stringify(data));
          console.log('JSON: ', body.token);
          this.storeUserToken(body.token);
          this.goToTabs();
        }
      },
      (errmess) => {
        this.errMess = <any>errmess; 
        console.log('[ERROR] ...... WelcomePage.login()', this.errMess);
        if (this.errMess.status == 403 || this.errMess.status == 401){
          this.alertTitle = 'Incorrect login';
          this.alertMessage = 'Please try again';
        }  
        else if (this.errMess.status == 500) {
          this.alertTitle = 'Internal Server Error';
          this.alertMessage = 'The service is unavailable, please try again later';
        }     
        else {
          this.alertTitle = 'Technical issue';
          this.alertMessage = 'The service is unavailable, please try again later'
        }

        this.presentAlert(this.alertTitle, this.alertMessage);
        
      });  
  }

  async presentAlert(header, message) {
    const alert = await this.alertCtrl.create({
      header: header,
      message: message,
      buttons: [
        {
          text: 'OK', 
          cssClass: 'alertButtonYes',
        }]
    });

    await alert.present();
  }

  storeUserToken(token) {
    console.log("[INFO] ...... storeUserToken 1 ", token); 
    this.storage.set('token', token);
  }

}
