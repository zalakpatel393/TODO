import { Component, OnInit } from "@angular/core";
import { TodoService } from "src/app/shared/todo.service";
import { ToastrService } from "ngx-toastr";
import { Todo } from "src/app/shared/todo.model";
import { NgForm } from "@angular/forms";

@Component({
  selector: "app-todo-list",
  templateUrl: "./todo-list.component.html",
  styleUrls: ["./todo-list.component.css"]
})
export class TodoListComponent implements OnInit {
  constructor(private service: TodoService, private toastr: ToastrService) {}

  ngOnInit() {
    this.service.getTodos();
    //this.toastr.success("completed", "TODO");
  }

  onTaskCheck(todo: Todo) {
    // this.service.formData=todo;

    this.service.markTaskComplete(todo).subscribe(res => {
      this.toastr.success("Task Completed!!", "TODO");
      this.service.getTodos();
    });
  }

  updateTodo(todo, newValue) {
    todo.task_name = newValue;
    return this.service.updateTask(todo).subscribe(res => {
      todo.editing = false;
      return this.service.getTodos();
    });
  }
}
