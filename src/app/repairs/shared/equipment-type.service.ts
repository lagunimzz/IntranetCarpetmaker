import { Injectable } from '@angular/core';
import { Http,Response,URLSearchParams } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { EquipmentType } from './equipment-type.model';

@Injectable()
export class EquipmentTypeService {

  constructor(private http: Http) { 

  }
  
  endPointUrl = 'http://localhost:8080/CarpetmakerApi';

  getEquipments(type:string): Observable<EquipmentType[]> {
     let params = new URLSearchParams();
      params.set('type', type); 
      
    return this.http.get(this.endPointUrl+"/EquipmentTypes",{
    search : params
    })
    .map((res: Response)=>res.json())
    .catch((error:any) => Observable.throw(error.json().error || ' Server Error '));
  }
 
}
