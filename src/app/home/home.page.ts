import { ToDoElem } from "./../models/toDoElem.model";
import { Component, OnInit, OnDestroy } from "@angular/core";
import { TodoService } from "../services/todo.service";
import { Subscription } from "rxjs";

@Component({
  selector: "app-home",
  templateUrl: "home.page.html",
  styleUrls: ["home.page.scss"]
})
export class HomePage implements OnInit, OnDestroy {
  elements: ToDoElem[] = [];
  elementsSubscription: Subscription;

  constructor(private todoService: TodoService) {}

  ngOnInit(): void {
    this.elementsSubscription = this.todoService.elementsSubject.subscribe(
      elements => {
        this.elements = elements;
      }
    );
    this.todoService.emitElementSubject();
  }

  onAdd(element: string) {
    this.todoService.onAdd(element);
  }

  onRemove(element: ToDoElem) {
    this.todoService.onRemove(element);
  }

  checkChange(element: ToDoElem) {
    element.done = element.isChecked;
  }

  ngOnDestroy(): void {
    this.elementsSubscription.unsubscribe();
  }
}
