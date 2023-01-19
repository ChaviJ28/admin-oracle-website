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
                user_token: "regOGv2y5BEcS42NiygKQtE5uvu6uxKx1Lr31uKtKlJ35NI6qRrGZH633f2c1c8c3a465ab9e63defPuWd5Otkw3OU6qGNVTBSQ",
            },
            data: {
                search_criteria: searchCriteria,
                sort: [
                    { createdAt: 'DESC' }
                ]
            }
        });
    }

}
