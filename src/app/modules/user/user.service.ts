import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable({
    providedIn: 'root'
})
export class UserService {

    constructor(private http: HttpClient) { }

    listUserResponse(searchCriteria: any): Observable<any> {
        return this.http.post<any>(environment.apiUrl + 'user/list', {
            auth: {
                app_token: environment.appToken,
                user_token: "regOGv2y5BEcS42NiygKQtE5uvu6uxKx1Lr31uKtKlJ35NI6qRrGZH633f2c1c8c3a465ab9e63defPuWd5Otkw3OU6qGNVTBSQ",
            },
            data: {
                search_criteria: searchCriteria
            }
        });
    }

    listAccessRights(): Observable<any> {
        return this.http.post<any>(environment.apiUrl + 'user/list-access-rights', {
            auth: {
                app_token: environment.appToken,
                user_token: "regOGv2y5BEcS42NiygKQtE5uvu6uxKx1Lr31uKtKlJ35NI6qRrGZH633f2c1c8c3a465ab9e63defPuWd5Otkw3OU6qGNVTBSQ",
            },
            data: {}
        });
    }

    createUser(email: string, name: string, username: string, access: string[]): Observable<any> {
        return this.http.post<any>(environment.apiUrl + 'user/create', {
            auth: {
                app_token: environment.appToken,
                user_token: "regOGv2y5BEcS42NiygKQtE5uvu6uxKx1Lr31uKtKlJ35NI6qRrGZH633f2c1c8c3a465ab9e63defPuWd5Otkw3OU6qGNVTBSQ",
            },
            data: {
                email: email,
                full_name: name,
                username: username,
                access: access
            }
        });
    }

}
