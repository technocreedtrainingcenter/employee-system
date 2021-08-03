import { EmployeeService } from './../../service/employee.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit-employee',
  templateUrl: './edit-employee.component.html',
  styleUrls: ['./edit-employee.component.scss']
})
export class EditEmployeeComponent implements OnInit {

  employeeDetails: any;

  constructor(
    private employeeService: EmployeeService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) { 
    this.activatedRoute.paramMap.subscribe(
      response => {
        debugger
          const employeeId = response.get('empId');
          this.getEmployeeById(employeeId);
      }
    )
  }

  getEmployeeById(id: any) {
    this.employeeService.getEmployeeById(id).subscribe(
      (response: any) => {
        this.employeeDetails = response.data;
      }
    )
  }
  ngOnInit(): void {
  }


  goto() {
    this.router.navigate(['edit-employee', 10])

  }
}
