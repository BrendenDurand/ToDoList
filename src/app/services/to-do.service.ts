import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {ToDo} from 'src/app/Models/ToDo';
import {Observable} from 'rxjs';

const httpOptions ={
    headers: new HttpHeaders({
        'Content-Type': 'application/json',
    })
}
@Injectable({
    providedIn: 'root'
})
export class ToDoService {

    todosUrl: string = 'https://jsonplaceholder.typicode.com/todos?_limit=5';
    toDosLimit : string = '?_limit=5'
    constructor(private http: HttpClient) {}

//get your todos
    getTodos(): Observable<ToDo[]> {
        return this.http.get<ToDo[]>(this.todosUrl);
    }
    
    //toggle has completed 
    toggleCompleted(todo: ToDo): Observable<any>
    {
        const url =`${this.todosUrl}/${todo.id}`
        return this.http.put(url, todo, httpOptions);
    }

}

