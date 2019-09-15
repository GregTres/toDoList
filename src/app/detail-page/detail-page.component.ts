import { ToDoElem } from "./../models/toDoElem.model";
import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { TodoService } from "../services/todo.service";

@Component({
  selector: "app-detail-page",
  templateUrl: "./detail-page.component.html",
  styleUrls: ["./detail-page.component.scss"]
})
export class DetailPageComponent implements OnInit {
  id: number;
  element: ToDoElem;

  constructor(
    private route: ActivatedRoute,
    private toDoService: TodoService
  ) {}

  ngOnInit() {
    //The "+" is used to cast string to integer
    this.id = +this.route.snapshot.params["id"];
    this.element = this.toDoService.getElementById(this.id);
  }

  onClick() {
    console.log(this.element.description);
  }
}
