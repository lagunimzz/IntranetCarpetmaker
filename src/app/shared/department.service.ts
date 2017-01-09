import { Injectable } from '@angular/core';
import { Http,Response,URLSearchParams } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { Department } from './department.model';

@Injectable()
export class DepartmentService {

  constructor(private http: Http) { 

  }
  
  endPointUrl = 'http://localhost:8080/CarpetmakerApi';

  getDepartments(): Observable<Department[]> {
    return this.http.get(this.endPointUrl+"/Departments")
    .map((res: Response)=>res.json())
    .catch((error:any) => Observable.throw(error.json().error || ' Server Error '));
  }


}
