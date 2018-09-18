import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ActionSheetController, AlertController } from 'ionic-angular';
import { User } from '../../models/user/user.module';
import { AngularFireAuth } from 'angularfire2/auth'
import { errorHandler } from '@angular/platform-browser/src/browser';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  user = {} as User;

  constructor(public alertCtrl: AlertController,
    public navCtrl: NavController, public navParams: NavParams, private angAuth: AngularFireAuth) {
  }
  presentAlert(message: string) {
    let alert = this.alertCtrl.create({
      title: 'Login info',
      subTitle: message,
      buttons: ['OK']
    });
    alert.present();
  }

  async login(user: User) {
    try {
      const result = this.angAuth.auth.signInWithEmailAndPassword(user.email, user.password).then(goto => this.navCtrl.setRoot('HomePage')).catch(error => this.presentAlert(error.message)); //this was terrible
    }
    catch (err) {
      this.presentAlert(err.message);

    }
  }

  register() {
    this.navCtrl.push('RegisterPage')
  }
}
