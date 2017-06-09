/**
 * Created by user on 09/06/2017.
 */
import { Injectable } from '@angular/core';
import {Http} from "@angular/http";
import {Observable} from "rxjs";
import 'rxjs/Rx';

@Injectable()
export class HomeService {

  constructor(private http:Http) { }

  public getFacts():Observable<any>{
    return this.http.get('http://factoftheday.eu/wp-json/wp/v2/posts')
      .map(res => res.json());
  }

}
