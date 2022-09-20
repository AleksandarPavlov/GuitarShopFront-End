import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';


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
  selector: 'app-electric-guitars',
  templateUrl: './electric-guitars.component.html',
  styleUrls: ['./electric-guitars.component.css']
})
export class ElectricGuitarsComponent implements OnInit {

  guitars!: Guitar[];

  constructor(private httpClient: HttpClient) { }

  ngOnInit(): void {
    this.getGuitars();
  }

  getGuitars(){
    this.httpClient.get<any>('http://192.168.1.8:8080/guitars/electric').subscribe(
      response => {
        console.log(response);
        this.guitars= response;
      }
    )
  }

  priceAsc(){
    this.guitars.sort((a, b) => (a.price > b.price) ? 1 : -1)
  }

  priceDesc(){
    this.guitars.sort((a, b) => (a.price < b.price) ? 1 : -1)
  }
}
