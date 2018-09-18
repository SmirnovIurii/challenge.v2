import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { User } from '../../models/user/user.module';
import { AngularFireAuth } from 'angularfire2/auth';

/**
 * Generated class for the RegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
    selector: 'page-register',
    templateUrl: 'register.html',
})
export class RegisterPage {
    user = {} as User;

    constructor(public navCtrl: NavController,
        public navParams: NavParams,
        private AngAuth: AngularFireAuth,
        private alertCtrl: AlertController) {
    }

    presentAlert(message: string) {
        let alert = this.alertCtrl.create({
            title: 'Register info',
            subTitle: message,
            buttons: ['OK']
        });
        alert.present();
    }

    async register(user: User) {
        try {
            const result = await this.AngAuth.auth.createUserWithEmailAndPassword(user.email, user.password)
            this.presentAlert('Registered'); this.navCtrl.setRoot('HomePage');
        }
        catch (err) {
            this.presentAlert(err.message);
        }
    }


}
