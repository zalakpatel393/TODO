import { Injectable } from "@angular/core";
import { Todo } from "./todo.model";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class TodoService {
  formData: Todo;
  readonly rootUrl = "http://localhost:2122";
  list: Todo[];
  constructor(private http: HttpClient) {}

  getTodos() {
    this.http
      .get(this.rootUrl + "/api/todoes/status/0")
      .toPromise()
      .then(res => (this.list = res as Todo[]));
  }

  markTaskComplete(formData: Todo) {
    formData.is_complete = 1;
    return this.http.put(this.rootUrl + "/api/todoes/" + formData.Id, formData);
  }

  addTask(formData: Todo) {
    return this.http.post(this.rootUrl + "/api/todoes/", formData);
  }

  updateTask(formData: Todo) {
    return this.http.put(this.rootUrl + "/api/todoes/" + formData.Id, formData);
  }
}
