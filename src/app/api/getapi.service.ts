import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GetapiService {

  constructor(public _http: HttpClient) { }


  getage<T>(url: string) {

    url = 'https://api.agify.io/?name=' + url;
    return this._http.get<T>(url);
  }

  getsex<T>(url: string) {

    url = 'https://api.genderize.io/?name=' + url;
    return this._http.get<T>(url);
  }

  getcountry<T>(url: string) {

    url = ' http://universities.hipolabs.com/search?country=' + url;
    return this._http.get<T>(url);
  }
}
