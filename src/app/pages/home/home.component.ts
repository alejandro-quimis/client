import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  services = [];
  constructor(private http: HttpClient){
    this.http.get('http://localhost:8084/dashboard/listar',{
      headers:{
        accept: "application/json"
      }
    }).subscribe( (item:any) => {
      this.services = item;
    
    })
  }

  ngOnInit() {
  }

}
