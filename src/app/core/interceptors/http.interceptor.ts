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
import { map, catchError } from 'rxjs/operators';
import { Router } from '@angular/router';
import { AuthServicesService } from '../services/auth-services.service';


@Injectable()
export class HttpConfigInterceptor implements HttpInterceptor {
    constructor(private auth:AuthServicesService,private router:Router) { }
    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const token: string = localStorage.getItem('token');
        
        if (token) {
            request = request.clone({ headers: request.headers.set('Authorization', 'Bearer ' + token) });
        }

        if (!request.headers.has('Content-Type')) {
            request = request.clone({ headers: request.headers.set('Content-Type', 'application/json') });
        }

        request = request.clone({ headers: request.headers.set('Accept', 'application/json') });

        return next.handle(request).pipe(
            map((event: HttpEvent<any>) => {
                if (event instanceof HttpResponse) {
                    console.log('event--->>>', event);
                    if(event.body.status === 0){
                        this.auth.logout().subscribe((res) => {
                            localStorage.clear();
                            this.router.navigate(['/auth/signin'])
                        });
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