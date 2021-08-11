import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'
import { AppComponent } from './app.component';
import { EmployeeService } from './service/employee.service';
import { AddEmployeeComponent } from './components/add-employee/add-employee.component';
import { ListEmployeeComponent } from './components/list-employee/list-employee.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { RouterModule, Routes } from '@angular/router';
import { ErrorComponent } from './components/error/error.component';
import { ContractEmployeeComponent } from './components/contract-employee/contact-employee.component';
import { PayrollEmployeeComponent } from './components/payroll-employee/payroll-employee.component';
import { EditEmployeeComponent } from './components/edit-employee/edit-employee.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CharOnlyDirective } from './directives/char-only.directive';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: ListEmployeeComponent,
    children: [
      {
        path: 'payroll',
        component: PayrollEmployeeComponent
      },
      {
        path: 'contract',
        component: ContractEmployeeComponent
      }
    ]
  },
  {
    path: 'add-employee',
    component: AddEmployeeComponent
  },
  {
    path: 'edit-employee/:empId',
    component: EditEmployeeComponent
  },
  {
    path: '**',
    component: ErrorComponent
  },
]

@NgModule({
  declarations: [
    AppComponent,
    AddEmployeeComponent,
    ListEmployeeComponent,
    NavbarComponent,
    ErrorComponent,
    ContractEmployeeComponent,
    PayrollEmployeeComponent,
    EditEmployeeComponent,
    CharOnlyDirective
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    // EmployeeService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
