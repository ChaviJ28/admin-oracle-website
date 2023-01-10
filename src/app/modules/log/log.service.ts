import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable({
    providedIn: 'root'
})
export class LogService {

    constructor(private http: HttpClient) { }

    listLogResponse(searchCriteria: any): Observable<never> {
        return this.http.post<never>(environment.apiUrl + 'log/list', {
            auth: {
                app_token: environment.appToken,
                user_token: "98764197289734652383730749",
            },
            data: {
                search_criteria: searchCriteria
            }
        });
    }

}
