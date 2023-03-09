import { Component, OnInit } from '@angular/core';
import { GetapiService } from '../api/getapi.service';

@Component({
  selector: 'app-age',
  templateUrl: './age.page.html',
  styleUrls: ['./age.page.scss'],
})
export class AgePage implements OnInit {
  getage:[] = [];
  public name: string = '';
  public age: number = 0;
  public img: string = '';
  public title: string ='';

  constructor(public _services: GetapiService) {


   }
   searchage(): void {
    this._services.getage<[]>(this.name).subscribe((data:any) => {
      this.age = data.age
      //joven 0-29
      if (this.age >= 0 && this.age <= 29) {
        this.img = 'assets/joven.png';
        this.title = 'Es una persona Joven';
      }
      //adulto 30-59
      if (this.age >= 30 && this.age <= 59) {
        this.img = 'assets/adulto.png';
        this.title = 'Es una persona Adulta';
      } 
      //anciano 60
      if (this.age >= 60) {
        this.img = 'assets/anciano.png';
        this.title = 'Es una persona anciana';
      }
    })
   }

  ngOnInit() {
  }

}
