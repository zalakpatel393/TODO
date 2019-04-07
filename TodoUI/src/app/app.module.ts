import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { ToastrModule } from "ngx-toastr";

import { AppComponent } from "./app.component";
import { TodoesComponent } from "./todoes/todoes.component";
import { TodoListComponent } from "./todoes/todo-list/todo-list.component";
import { TodoService } from "./shared/todo.service";
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { TodoAddComponent } from "./todoes/todo-add/todo-add.component";
import { MatButtonModule, MatCheckboxModule } from "@angular/material";
import { MatInputModule } from "@angular/material/input";
import "hammerjs";

@NgModule({
  declarations: [
    AppComponent,
    TodoesComponent,
    TodoListComponent,
    TodoAddComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatInputModule,
    ToastrModule.forRoot()
  ],
  providers: [TodoService],
  bootstrap: [AppComponent]
})
export class AppModule {}
