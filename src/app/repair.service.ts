import { Injectable } from '@angular/core';
import { Http,Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { Repair } from './repair';

@Injectable()
export class RepairService {

  constructor(private http: Http) { 

  }
  getRepairAPI(): Observable<any> {
    return this.http.get("http://localhost:8888/CarpetmakerApi/Repairs")
    .map((res: Response)=>res.json())
    .catch((error:any) => Observable.throw(error.json().error || ' Server Error '));
  }
  getEquipmentTypeAPI(): Observable<any> {
    return this.http.get("http://localhost:8888/CarpetmakerApi/EquipmentTypes")
    .map((res: Response)=>res.json())
    .catch((error:any) => Observable.throw(error.json().error || ' Server Error '));
  }
  createRepair(repair : Repair): Observable<any>{
    return this.http.post("http://localhost:8888/CarpetmakerApi/Repair",{
      repair
    })
    .map((res: Response)=>res.json())
    .catch((error:any) => Observable.throw(error.json().error || ' Server Error '));
  }
}
