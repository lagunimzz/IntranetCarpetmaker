import { Injectable } from '@angular/core';
import { Http,Response,URLSearchParams } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { Repair } from './repair.model';
import { apiConfig } from '../../shared/apiconfig'
@Injectable()
export class RepairService {

  constructor(private http: Http) { 

  }
  
  endPointUrl = apiConfig.endPointUrl;


  getRepair(repairNo:string): Observable<Repair>{
     let params = new URLSearchParams();
      params.set('repairNo', repairNo); 

    return this.http.get(this.endPointUrl+"/Repair",{
      search : params
    })
    .map((res: Response)=>res.json())
    .catch((error:any) => Observable.throw(error.json().error || ' Server Error '));
  }
  editRepair(repair:Repair): Observable<any> {
    return this.http.put(this.endPointUrl+"/Repair",{
     repair
    })
    .map((res: Response)=>res.json())
    .catch((error:any) => Observable.throw(error.json().error || ' Server Error '));
  }
  deleteRepair(repairNo:string):Observable<any> {
    let params = new URLSearchParams();
      params.set('repairNo', repairNo); 

    return this.http.delete(this.endPointUrl+"/Repair",{
      search : params
    })
    .map((res: Response)=>res.json())
    .catch((error:any) => Observable.throw(error.json().error || ' Server Error '));
  }
  getRepairs(): Observable<Repair[]> {
    return this.http.get(this.endPointUrl+"/Repairs")
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
  
  saveEvaluation(repairNo:string,rate:string): Observable<any>{
    return this.http.post(this.endPointUrl+"/Evaluation",{
      repairNo,rate
    })
    .map((res: Response)=>res.json())
    .catch((error:any) => Observable.throw(error.json().error || ' Server Error ')); 
  }
  getHistoryMachine(selectedMachine:string) : Observable<Repair[]>{
    let params = new URLSearchParams();
    params.set('selectedMachine', selectedMachine); 
    return this.http.get(this.endPointUrl+"/HistoryMachine",{
      search : params
    })
    .map((res: Response)=>res.json())
    .catch((error:any) => Observable.throw(error.json().error || ' Server Error ')); 
  }
}
