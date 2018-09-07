import {Todo} from './todo';

export class App {
    constructor() {
        this.heading = 'Todos with Aurelia';
        this.todos = [];
        this.todoDescription = '';
    }

    addTodo() {
        if(this.todoDescription) {
            if(this.checkIfExists(this.todoDescription).length === 0) {
                this.todos.push(new Todo(this.todoDescription));
                this.todoDescription = '';
            }
        }
    }

    removeTodo(todo) {
        let index = this.todos.indexOf(todo);
        if(index !== -1) {
            this.todos.splice(index, 1);
        }
    }

    renameTodo(todo) {
        todo.contentEditable = true;
    }

    checkIfExists(newTodo) {
        let isPresent = [];

        isPresent = this.todos.filter((obj) => {
            if(obj.description == newTodo) {
                return obj.description;
            }
        });
        return isPresent;
    }
}