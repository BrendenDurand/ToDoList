import {Component, OnInit} from '@angular/core';
import {ToDo} from 'src/app/Models/ToDo';
import {ToDoService} from 'src/app/services/to-do.service';

@Component({
    selector: 'to-do-list',
    templateUrl: './to-do-list.component.html',
    styleUrls: ['./to-do-list.component.scss']
})
export class ToDoListComponent implements OnInit {

    id: number; 
    searchText: string; 
    todos: ToDo[];
   originaltodos: ToDo[];
    selectedToDo: ToDo; 
    constructor(private toDoService: ToDoService) {}

    ngOnInit() {
        this.toDoService.getTodos().subscribe(todos => {
            this.todos = todos;
            this.originaltodos = todos;
        });
    }


    AddToDo() {
        let newToDo = new ToDo();
        newToDo.id = this.id;
        newToDo.title = 'mytitle';
        newToDo.category = 'mycategory';
        newToDo.Description = 'mydescription';
        newToDo.completed = false;
        
        this.todos.push(newToDo);     
        this.originaltodos.push(newToDo); 
        this.id = this.id++;
    }
    
    deleteAToDo(todo: ToDo){
        this.todos = this.todos.filter(t => t.id !== todo.id);
        this.originaltodos = this.originaltodos.filter(t => t.id !== todo.id);
    }
    setTheSelected(todo: ToDo)
    {
        this.selectedToDo = todo; 
    }
    
    //search by title 
    searchTitle()
    {
        this.todos = this.todos.filter(t => t.title === this.searchText);
    }
    
    //search by category
    searchCategory()
    {
        this.todos = this.todos.filter(t => t.category === this.searchText);
    }
    //clear search 
    clearSearch()
    {
        this.searchText = "";
        this.todos = this.originaltodos;
    } 
}

