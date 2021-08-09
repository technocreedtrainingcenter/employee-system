import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import * as moment from 'moment';
import { map } from 'rxjs/operators'
@Injectable({ providedIn : 'root'})
export class EmployeeService {
    employeeId: any;

    constructor(
        private http: HttpClient
    ) { }

    getEmplyeeList() {
        return this.http.get('https://dummy.restapiexample.com/api/v1/employees')
    }

    getEmployeeById(id: any) {
        return this.http.get(`http://dummy.restapiexample.com/api/v1/employee/${id}`)
    }

    addEmployee(data: any) {
        return this.http.post('http://dummy.restapiexample.com/api/v1/create', data)
    }

    getStates() {
        return this.http.get('https://cdn-api.co-vin.in/api/v2/admin/location/states')
            .pipe(
                map((response: any) => {
                    debugger
                    return response.states
                })
            )
    }

    getDistrict(stateId: any) {
        return this.http.get(`https://cdn-api.co-vin.in/api/v2/admin/location/districts/${stateId}`)
    }

    getCenters(districtId: any) {
        const todaysDate = moment().format('DD-MM-yyyy')
        return this.http.get(`https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/findByDistrict?district_id=${districtId}&date=${todaysDate}`)
    }
}