import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { Todo } from '../../models/Todo/todo.model';
import { TodoListService } from '../../services/todolist/todolist.service';
import { ToastService } from '../../services/toast/toast.service';
import { AuthService } from '../../services/auth/auth.service';

/**
 * Generated class for the EditTodoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-edit-todo',
  templateUrl: 'edit-todo.html',
})
export class EditTodoPage {
  todo: Todo;
  timezoneDate: string;
  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    private todolist: TodoListService,
    private toast: ToastService,
    private authService: AuthService,
    private alertCtrl: AlertController, ) {

  }
  dateAndTime = new Date().toISOString();
  presentAlert(message: string) {
    let alert = this.alertCtrl.create({
      title: 'Login info',
      subTitle: message,
      buttons: ['OK']
    });
    alert.present();
  }

  alertWithAuth() {
    let alert = this.alertCtrl.create({
      title: 'Login',
      message: 'You must login to make changes',
      buttons: [
        {
          text: 'Login',
          handler: () => {
            this.navCtrl.push('LoginPage');
          }
        },
        {
          text: 'Register',
          handler: () => {
            this.navCtrl.push('RegisterPage');
          }
        }
      ]
    });
    alert.present();
  }

  ionViewWillLoad() {
    this.todo = (this.navParams.get('todo'));
    let newDate = new Date(this.todo.time);
    newDate.setHours(newDate.getHours() - (newDate.getTimezoneOffset() / 60))
    this.timezoneDate = newDate.toISOString();
  }

  EditTodo(todo: Todo) {
    if (this.authService.authenticated) {
      todo.time = this.dateAndTime;
      todo.added = this.authService.currentUser.email;
      this.todolist.editTodo(todo).then(() => {
        this.toast.show(`${todo.description} changed`);
        this.navCtrl.setRoot('HomePage');

      })
    }
    else {
      this.alertWithAuth();
    }
  }
  FinishTodo(todo: Todo) {
    if (this.authService.authenticated) {
      this.todolist.finishTodo(todo).then(() => {
        this.toast.show(`${todo.description} finished`);
        this.navCtrl.setRoot('HomePage');

      })
    }
    else {
      this.alertWithAuth();
    }
  }
}
