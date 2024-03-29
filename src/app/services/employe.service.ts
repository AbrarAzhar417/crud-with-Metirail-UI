import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeService {

  constructor(private employe:HttpClient) { }
  
addEmploye(data:any):Observable<any>{
  return this.employe.post("http://localhost:3000/employee",data)
}
getEmployeList():Observable<any>{
  return this.employe.get("http://localhost:3000/employee")
}
deleteEmploye(id:number):Observable<any>{
  return this.employe.delete(`http://localhost:3000/employee/${id}`)
}
}


