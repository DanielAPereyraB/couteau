import { Component, OnInit } from '@angular/core';
import { GetapiService } from '../api/getapi.service';

@Component({
  selector: 'app-country',
  templateUrl: './country.page.html',
  styleUrls: ['./country.page.scss'],
})
export class CountryPage implements OnInit {
  getcountry:any[] = [];
  public name: string = '';

  constructor(public _services: GetapiService) {


   }
  searchcountry(): void {
    let name = this.name.replace(" ", "+");
    this._services.getcountry<[]>(name).subscribe((data:any) => {
      this.getcountry = data
      console.log(this.getcountry)
    })
   }

  ngOnInit() {
  }

}
