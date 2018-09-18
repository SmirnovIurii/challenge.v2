import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Todo } from '../../models/Todo/todo.model';

/**
 * Generated class for the FinishedPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-finished',
  templateUrl: 'finished.html',
})
export class FinishedPage {
  todo: Todo;
  timezoneDate: string;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewWillLoad() {
    this.todo = (this.navParams.get('todo'));
    let newDate = new Date(this.todo.time);
    newDate.setHours(newDate.getHours() - (newDate.getTimezoneOffset() / 60))
    this.timezoneDate = newDate.toISOString();
  }


}
