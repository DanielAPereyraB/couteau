import { Component, OnInit } from '@angular/core';
import { GetapiService } from '../api/getapi.service';

@Component({
  selector: 'app-sex',
  templateUrl: './sex.page.html',
  styleUrls: ['./sex.page.scss'],
})
export class SexPage implements OnInit {
  public name: string = '';
  public gender: string = '';

  constructor(public _services: GetapiService) {
   }

  searchsex(): void {
    this._services.getsex<[]>(this.name).subscribe((data: any) => {
      this.gender = data.gender;
   })
  }
  ngOnInit() {
  }

}
