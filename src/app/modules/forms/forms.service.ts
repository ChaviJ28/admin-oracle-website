import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable({
    providedIn: 'root'
})
export class FormService {

    constructor(private http: HttpClient) { }

    listFormResponse(searchCriteria: any, created_by: boolean): Observable<any> {
        return this.http.post<any>(environment.apiUrl + 'form/list', {
            auth: {
                app_token: environment.appToken,
                user_token: "regOGv2y5BEcS42NiygKQtE5uvu6uxKx1Lr31uKtKlJ35NI6qRrGZH633f2c1c8c3a465ab9e63defPuWd5Otkw3OU6qGNVTBSQ",
            },
            data: {
                search_criteria: searchCriteria,
                populate: {
                    created_by: created_by
                }
            }
        });
    }

    createForm(data: any): Observable<any> {
        return this.http.post<any>(environment.apiUrl + 'form/create', {
            auth: {
                app_token: environment.appToken,
                user_token: "regOGv2y5BEcS42NiygKQtE5uvu6uxKx1Lr31uKtKlJ35NI6qRrGZH633f2c1c8c3a465ab9e63defPuWd5Otkw3OU6qGNVTBSQ",
            },
            data: data
        });
    }
}