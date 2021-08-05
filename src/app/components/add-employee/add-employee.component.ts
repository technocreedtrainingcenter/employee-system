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

    constructor(private employeeService: EmployeeService) {
        this.employeeForm = new FormGroup({
            name: new FormControl(null, Validators.required),
            age: new FormControl(null, Validators.required),
            salary: new FormControl(null, Validators.required)
        });
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

}