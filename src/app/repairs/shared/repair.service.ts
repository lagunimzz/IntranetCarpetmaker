import { Injectable } from '@angular/core';
import { Http,Response,URLSearchParams } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { Repair } from './repair.model';

@Injectable()
export class RepairService {

  constructor(private http: Http) { 

  }
  
  endPointUrl = 'http://localhost:8080/CarpetmakerApi';

  getRepairAPI(): Observable<any> {
    return this.http.get(this.endPointUrl+"/Repairs")
    .map((res: Response)=>res.json())
    .catch((error:any) => Observable.throw(error.json().error || ' Server Error '));
  }
  getEquipmentTypeAPI(type:string): Observable<any> {
     let params = new URLSearchParams();
      params.set('type', type); 

    return this.http.get(this.endPointUrl+"/EquipmentTypes",{
      search : params
    })
    .map((res: Response)=>res.json())
    .catch((error:any) => Observable.throw(error.json().error || ' Server Error '));
  }
  createRepair(repair : Repair): Observable<any>{
    return this.http.post(this.endPointUrl+"/Repair",{
     repair
    })
    .map((res: Response)=>res.json())
    .catch((error:any) => Observable.throw(error.json().error || ' Server Error '));
  }
}
