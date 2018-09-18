import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Todo } from '../../models/Todo/todo.model';
import { TodoListService } from '../../services/todolist/todolist.service';
import { ToastService } from '../../services/toast/toast.service';
import { AuthService } from '../../services/auth/auth.service';


/**
 * Generated class for the AddTodoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-add-todo',
  templateUrl: 'add-todo.html',
})
export class AddTodoPage {
  aDate = new Date();
  todo: Todo = {
    title: '',
    description: '',
    added: this.authService.currentUser.email,
    time: ''

  }
  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    private todolist: TodoListService,
    private toast: ToastService,
    private authService: AuthService,

  ) {
  }



  ionViewDidLoad() {
    console.log('ionViewDidLoad AddTodoPage');
  }
  addTodo(todo: Todo) {
    todo.time = this.aDate.toUTCString();
    todo.added = this.authService.currentUser.email;
    this.todolist.addTodo(todo).then(ref => {
      this.toast.show(`${todo.description} added`);
      this.navCtrl.setRoot('HomePage', { key: ref.key })
    })
  }
}
