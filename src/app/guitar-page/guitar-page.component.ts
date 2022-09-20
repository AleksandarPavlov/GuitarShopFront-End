import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import * as $ from 'jquery';


export class Guitar{
  constructor(
    public id: number,
    public brand: String,
    public model: String,
    public price: number,
    public neck: String,
    public guitarType: String,
    public image: String,
    public sliderImage: String,
    public available: boolean,

  ){}
}

@Component({
  selector: 'app-guitar-page',
  templateUrl: './guitar-page.component.html',
  styleUrls: ['./guitar-page.component.css']
})
export class GuitarPageComponent implements OnInit {

  id
  guitar!: Guitar
  constructor(private activatedroute: ActivatedRoute, private httpClient: HttpClient,) { 
    this.id=this.activatedroute.snapshot.paramMap.get("id");
  }

  ngOnInit(): void {
    this.getGuitar();
    
   
   
  }

  getGuitar(){
    this.httpClient.get<any>('http://192.168.1.8:8080/guitars/' + this.id).subscribe(
      response => {
        console.log(response);
        this.guitar= response;
      }
    )
  }

}
