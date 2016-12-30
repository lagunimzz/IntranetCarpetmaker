import { Injectable } from '@angular/core';
import { Http,Response,URLSearchParams } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { Repair } from './repair';

@Injectable()
export class RepairService {

  constructor(private http: Http) { 

  }
  

  getRepairAPI(): Observable<any> {
    return this.http.get("http://localhost:8080/CarpetmakerApi/Repairs")
    .map((res: Response)=>res.json())
    .catch((error:any) => Observable.throw(error.json().error || ' Server Error '));
  }
  getEquipmentTypeAPI(type:string): Observable<any> {
     let params = new URLSearchParams();
      params.set('type', type); 

    return this.http.get("http://localhost:8080/CarpetmakerApi/EquipmentTypes",{
      search : params
    })
    .map((res: Response)=>res.json())
    .catch((error:any) => Observable.throw(error.json().error || ' Server Error '));
  }
  createRepair(repair : Repair): Observable<any>{
    return this.http.post("http://localhost:8080/CarpetmakerApi/Repair",{
      repair
    })
    .map((res: Response)=>res.json())
    .catch((error:any) => Observable.throw(error.json().error || ' Server Error '));
  }
}
