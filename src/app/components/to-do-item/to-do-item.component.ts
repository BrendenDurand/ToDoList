import {Component, OnInit, Input, EventEmitter, Output} from '@angular/core';
import {ToDo} from 'src/app/Models/ToDo';
import {ToDoService} from 'src/app/services/to-do.service';

@Component({
    selector: 'app-to-do-item',
    templateUrl: './to-do-item.component.html',
    styleUrls: ['./to-do-item.component.scss']
})
export class ToDoItemComponent implements OnInit {

    @Input() todo: ToDo;
    @Output() deleteAToDo: EventEmitter<ToDo> = new EventEmitter();
    @Output() setTheSelected: EventEmitter<ToDo> = new EventEmitter();


    constructor(private toDoService: ToDoService) {}

    ngOnInit() {
    }

    //set dynamic classes
    setClasses() {
        let classes = {
            todo: true,
            'is-complete': this.todo.completed,
        }
        return classes;
    }

    //Toggle method 
    toggle(todo: ToDo) {
        todo.completed = !this.todo.completed;
        //http request 
        this.toDoService.toggleCompleted(todo).subscribe(todo => {
            console.log('done')
        });
    }

    //Delete method
    deleteToDo(todo: ToDo) {
        this.deleteAToDo.emit(todo);
    }

    //setselectedTodo
    setSelectedToDo(todo: ToDo) {
        this.setTheSelected.emit(todo);
    }
    
}
