import { Component, OnInit } from '@angular/core';
import { ToDoListService } from '../to-do-list.service';

@Component({
  selector: 'app-delete-to-do',
  templateUrl: './delete-to-do.component.html',
  styleUrls: ['./delete-to-do.component.css']
})
export class DeleteToDoComponent implements OnInit {

  searchIndex : number = 0;

  constructor(private todoDB : ToDoListService) { }

  DeleteToDoAtIndex(searchIndex : number) : void 
  {
    this.todoDB.DeleteToDo(searchIndex).subscribe((result : any) => {console.log(result)});
  }

  ngOnInit(): void {
  }

}
