import { CharOnly } from '../../validators/char-only.validator';
import { EmployeeService } from 'src/app/service/employee.service';
import { Component } from "@angular/core";
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
    selector: 'app-add-employee',
    templateUrl: './add-employee.component.html',
    styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent {

    // name: any = '';
    // age: any = '';
    // salary: any = '';
    
    employeeForm;
    states: any[] = [];

    districts: any[] = [];

    centers: any[] = [];

    constructor(private employeeService: EmployeeService) {
        this.employeeForm = new FormGroup({
            name: new FormControl(null, [Validators.required, Validators.maxLength(5), CharOnly]),
            age: new FormControl(null, Validators.required),
            email: new FormControl(null, [Validators.email, Validators.required]),
            salary: new FormControl(null, Validators.required),
            state: new FormControl(null, Validators.required),
            district: new FormControl(null, Validators.required),
            center: new FormControl(null, Validators.required)
        });

        this.employeeService.getStates().subscribe(
            (response: any) => {
                debugger
                this.states = response;
            }
        )

        this.employeeForm.controls.state.valueChanges.subscribe(
            response => {
                this.employeeService.getDistrict(response).subscribe(
                    (response: any) => {
                        this.districts = response.districts;
                    }
                )
            }
        )

        this.employeeForm.controls.district.valueChanges.subscribe(
            response => {
                this.employeeService.getCenters(response).subscribe(
                    (response: any) => {
                        this.centers = response.sessions;
                    }
                )
            }
        )
    }


    addEmployee() {
        const data = {
            name: this.employeeForm.controls.name.value,
            age: this.employeeForm.controls.age.value,
            salary: this.employeeForm.controls.salary.value
        };
        console.log('employee form', this.employeeForm.value);
        debugger
        if (this.employeeForm.invalid) {
            return;
        }
        this.employeeService.addEmployee(this.employeeForm.value).subscribe(
            response => {

            }
        )
    }

    getDistricts() {
        // const selectedState = this.employeeForm.controls.state.value
        // this.employeeService.getDistrict(selectedState).subscribe(
        //     (response: any) => {
        //         this.districts = response.districts;
        //     }
        // )
        // console.log('selectedState', selectedState)
    }

    getCenters() {
        // const selectedDistrictId = this.employeeForm.controls.district.value;
        // this.employeeService.getCenters(selectedDistrictId).subscribe(
        //     (response: any) => {
        //         this.centers = response.sessions;
        //     }
        // )
    }

}