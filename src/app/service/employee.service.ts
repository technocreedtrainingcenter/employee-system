import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({ providedIn : 'root'})
export class EmployeeService {

    constructor(
        private http: HttpClient
    ) { }

    getEmplyeeList() {
        return this.http.get('https://dummy.restapiexample.com/api/v1/employees')
    }

    getEmployeeById(id: any) {
         this.http.get(`http://dummy.restapiexample.com/api/v1/employee/${id}`)
    }
}