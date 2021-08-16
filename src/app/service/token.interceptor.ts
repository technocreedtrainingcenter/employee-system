import { HttpErrorResponse, HttpHandler, HttpHeaders, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { environment } from '../../environments/environment';

@Injectable({
    providedIn: 'root'
})
export class TokenInterceptor implements HttpInterceptor {

    intercept(req: HttpRequest<any>, reqHandler: HttpHandler) {

        const devUrl = environment.basUrl;

        let headers = new HttpHeaders();
        headers = headers.append('token', 'testtoken');

        const cloneReq = req.clone({
            url: `${devUrl}${req.url}`,
            headers,
        });
        
        return reqHandler.handle(cloneReq).pipe(
            catchError((error: HttpErrorResponse) => {
                let errorMsg = '';
                
                debugger
                return throwError(errorMsg);
              })
        );
    }
}