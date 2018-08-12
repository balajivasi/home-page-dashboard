import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class GetMenuDataService {

  constructor(private _http:Http) { }

  getMegaMenuService(ID):Observable<any>{
		
		return this._http.get(ID)
				  		 .pipe(map(response=>response.json()))
				  		 	
  }
  
}
