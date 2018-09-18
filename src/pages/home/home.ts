import { Component } from '@angular/core';
import { NavController, IonicPage, AlertController, Alert, NavPush } from 'ionic-angular';
import { TodoListService } from '../../services/todolist/todolist.service';
import { Observable } from 'rxjs';
import { Todo } from '../../models/Todo/todo.model';
import { map } from 'rxjs/operators';
import { AngularFireAuth } from 'angularfire2/auth'
import { ToastService } from '../../services/toast/toast.service';
import { AuthService } from '../../services/auth/auth.service'


@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {
  todos: string;
  count: number;
  countFinish: number;
  Listoftodo$: Observable<Todo[]>;
  ListoftodoFinish$: Observable<Todo[]>;
  Active: boolean;
  constructor(
    private alertCtrl: AlertController,
    public navCtrl: NavController,
    private todolist: TodoListService,
    private AngAuth: AngularFireAuth,
    private toast: ToastService,
    private authService: AuthService,
  ) {


    this.todos = "Active";
    this.AngAuth.authState.subscribe(data => {
      if (data && data.email && data.uid) {
        this.toast.show(`Hello, ${data.email}`, 5000);
      }
      else {
        this.toast.show('You must login')
      }
    })


    this.Listoftodo$ = this.todolist.
      getTodoList().
      snapshotChanges().
      pipe(map(
        changes => {
          return changes.map(c => ({
            key: c.payload.key, ...c.payload.val(),
          }));
        }
      ));
    this.Listoftodo$.subscribe(result => { this.count = result.length; this.Active = true; });
    this.ListoftodoFinish$ = this.todolist.
      getTodoListFinish().
      snapshotChanges().
      pipe(map(
        changes => {
          return changes.map(c => ({
            key: c.payload.key, ...c.payload.val(),
          }));
        }
      ));

  }
  countFinished() {
    this.ListoftodoFinish$.subscribe(result => { this.count = result.length; this.Active = false; });
  }
  countInProgres() {
    this.Listoftodo$.subscribe(result => { this.count = result.length; this.Active = true; });
  }
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


  addTodo() {
    var myDate: string = new Date().toISOString();

    if (this.authService.authenticated) { this.navCtrl.push('AddTodoPage') }
    else { this.alertWithAuth(); }
  }



  logout() {
    this.AngAuth.auth.signOut();
    this.presentAlert('Good Bye!');
  }
}
