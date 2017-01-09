import { Injectable } from '@angular/core';
import { Http,Response,URLSearchParams } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { MachineType } from './machine.model';

@Injectable()
export class MachineTypeService {

  constructor(private http: Http) { 

  }
  
  endPointUrl = 'http://localhost:8080/CarpetmakerApi';

  getMachines(): Observable<MachineType[]> {
    return this.http.get(this.endPointUrl+"/Machines")
    .map((res: Response)=>res.json())
    .catch((error:any) => Observable.throw(error.json().error || ' Server Error '));
  }
 
}
