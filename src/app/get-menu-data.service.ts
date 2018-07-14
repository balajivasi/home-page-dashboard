import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class GetMenuDataService {

  constructor(private _http:Http) { }

  getMegaMenuService():Observable<any>{
		
		return this._http.get('./assets/data.json')
				  		 .pipe(map(response=>response.json()))
				  		 	
  }
  
}
