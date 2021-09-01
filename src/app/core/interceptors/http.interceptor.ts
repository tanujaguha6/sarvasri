import { Injectable } from '@angular/core';
import {
    HttpInterceptor,
    HttpRequest,
    HttpResponse,
    HttpHandler,
    HttpEvent,
    HttpErrorResponse
} from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { map, catchError,finalize } from 'rxjs/operators';
import { Router } from '@angular/router';
import { AuthServicesService } from '../services/auth-services.service';
import { LoaderService } from '../services/loader-service.service';

@Injectable()
export class HttpConfigInterceptor implements HttpInterceptor {
    constructor(private auth:AuthServicesService,private router:Router,public loaderService: LoaderService) { }
    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const token: string = localStorage.getItem('token');
        const userdata: string = localStorage.getItem('userData');
        if (token) {
            request = request.clone({ headers: request.headers.set('Authorization', 'Bearer ' + token) });
        }

        if (!request.headers.has('Content-Type')) {
            request = request.clone({ headers: request.headers.set('Content-Type', 'application/json') });
        }

        request = request.clone({ headers: request.headers.set('Accept', 'application/json') });
        this.loaderService.show();
        return next.handle(request).pipe(
            finalize(() => this.loaderService.hide()),
            map((event: HttpEvent<any>) => {
                if (event instanceof HttpResponse) {
                    if(event.body.status === 0 && userdata){
                        this.auth.logout().subscribe((res) => {
                            localStorage.clear();
                            localStorage.setItem('errormessage',event.body.message);
                            this.router.navigate(['/auth/signin'])
                        });
                    }
                    else{
                        this.loaderService.hide()
                    }
                    
                }
                return event;
            }),
            catchError((error: HttpErrorResponse) => {
                let data = {};
                //console.log(error)
                
                return throwError(error);
            }));
    }
}