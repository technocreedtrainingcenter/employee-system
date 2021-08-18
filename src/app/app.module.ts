import { AuthGuard } from './guards/auth.guard';
import { TokenInterceptor } from './service/token.interceptor';
import { SearchPipe } from './pipe/search.pipe';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http'
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
import { ShortenPipe } from './pipe/shorten.pipe';
import { LettersPipe } from './pipe/letters.pipe';
import { LoginComponent } from './components/login/login.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'home',
    component: ListEmployeeComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: 'payroll',
        component: PayrollEmployeeComponent,
      },
      {
        path: 'contract',
        component: ContractEmployeeComponent
      }
    ]
  },
  {
    path: 'add-employee',
    component: AddEmployeeComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'edit-employee/:empId',
    component: EditEmployeeComponent,
    canActivate: [AuthGuard],
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
    CharOnlyDirective,
    ShortenPipe,
    SearchPipe,
    LettersPipe,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    // EmployeeService,
    { provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor , multi: true },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
