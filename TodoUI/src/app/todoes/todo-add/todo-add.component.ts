import { Component, OnInit } from "@angular/core";
import { TodoService } from "src/app/shared/todo.service";
import { Todo } from "src/app/shared/todo.model";
import { NgForm } from "@angular/forms";
import { formArrayNameProvider } from "@angular/forms/src/directives/reactive_directives/form_group_name";
import { ToastrService } from "ngx-toastr";

@Component({
  selector: "app-todo-add",
  templateUrl: "./todo-add.component.html",
  styleUrls: ["./todo-add.component.css"]
})
export class TodoAddComponent implements OnInit {
  constructor(private service: TodoService, private toastr: ToastrService) {}

  ngOnInit() {
    this.resetForm();
  }

  resetForm(form?: NgForm) {
    if (form != null) form.resetForm();
    this.service.formData = {
      Id: null,
      task_name: "",
      is_complete: null
    };
  }

  onSubmit(form: NgForm) {
    this.addTask(form);
  }

  addTask(form: NgForm) {
    form.value.Id = null;
    this.service.addTask(form.value).subscribe(res => {
      this.toastr.info("Task Added!", "TODO");
      this.resetForm();
      this.service.getTodos();
    });
  }
}
