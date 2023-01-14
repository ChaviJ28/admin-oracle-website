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
                user_token: "98764197289734652383730749",
            },
            data: {
                search_criteria: searchCriteria,
                populate: {
                    created_by: created_by
                }
            }
        });
    }
}