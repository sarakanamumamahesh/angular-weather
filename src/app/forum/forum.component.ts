import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Users } from '../services/apirequest.services';

@Component({
  selector: 'app-forum',
  templateUrl: './forum.component.html',
  styleUrls: ['./forum.component.css']
})
export class ForumComponent implements OnInit {
  mahesh: String = 'mahesh a lol';
  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get<Users>('https://reqres.in/api/users').subscribe((data: Users) => console.log(Users));
  }

}
