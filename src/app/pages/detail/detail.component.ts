import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  item = null;

  constructor(private params:ActivatedRoute,private http:HttpClient) {
    this.params.params.subscribe(item => {
      this.http.get('http://localhost:8084/dashboard/buscar/'+item.id).subscribe(itemResp=>{
        this.item = itemResp;
      })
      
    })
   }

  ngOnInit() {
  }

}
