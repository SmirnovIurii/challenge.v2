import { Injectable } from "@angular/core";
import { AngularFireDatabase } from "angularfire2/database";
import { Todo } from "../../models/Todo/todo.model";

@Injectable()
export class TodoListService {
    private todolisttogo = this.db.list<Todo>('todo-list')
    private todolistcomleate = this.db.list<Todo>('todo-list-compleate')

    constructor(private db: AngularFireDatabase) { }
    getTodoList() {
        return this.todolisttogo;
    }
    getTodoListFinish() {
        return this.todolistcomleate;
    }
    addTodo(todo: Todo) {
        return this.todolisttogo.push(todo);
    }
    editTodo(todo: Todo) {
        return this.todolisttogo.update(todo.key, todo);
    }
    finishTodo(todo: Todo) {
        return this.todolistcomleate.push(todo), this.todolisttogo.remove(todo.key);

    }
}