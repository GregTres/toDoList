import { ToDoElem } from "./../models/toDoElem.model";
import { Injectable } from "@angular/core";
import { Subject } from "rxjs";

@Injectable()
export class TodoService {
  elements: ToDoElem[] = [];
  elementsSubject = new Subject<ToDoElem[]>();

  onAdd(element: string) {
    this.elements.push(
      new ToDoElem(element, "", false, false, this.elements.length)
    );
    this.emitElementSubject();
  }

  onRemove(element: ToDoElem) {
    const index = this.elements.findIndex(elem => elem === element);
    this.elements.splice(index, 1);
    this.emitElementSubject();
  }

  emitElementSubject() {
    this.elementsSubject.next(this.elements);
  }

  getElementById(id: Number) {
    var element: ToDoElem;
    this.elements.forEach(elem => {
      if (elem.id === id) {
        element = elem;
      }
    });
    return element;
  }
}
