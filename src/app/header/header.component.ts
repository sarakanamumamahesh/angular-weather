import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styles: [
    "./header.component.css",
    "../../../node_modules/bootstrap/dist/css/bootstrap.min.css"
  ]
})
export class HeaderComponent implements OnInit {
  title;
  constructor() {}
  ngOnInit() {}
  ctitle(title) {
    this.title = <String>title;
  }
}
