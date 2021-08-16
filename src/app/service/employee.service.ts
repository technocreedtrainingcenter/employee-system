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
        return this.http.get('employees')
    }

    getEmployeeById(id: any) {
        return this.http.get(`employee/${id}`)
    }

    addEmployee(data: any) {
        return this.http.post('create', data)
    }

    getStates() {
        return this.http.get('https://cdn-api.co-vin.in/api/v2/admin/location/states')
            .pipe(
                map((response: any) => {
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