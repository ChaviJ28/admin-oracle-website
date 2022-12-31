import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Log } from '../core/models/log.model';

@Injectable({
    providedIn: 'root'
})
export class LogService {

    constructor(private http: HttpClient) { }

    listLogResponse(): Observable<Log> {
        return this.http.post<Log>('http://localhost:4550/log/list', {
            auth: {
                app_token: "Dyweirr7sIDKymbF8gveYreT28p9xq23GQ1it66vgaxLytW4LxnR5Ohvn64qGPTprS7U6XzJ1426uJMVx9zCb6Uj9J1NEPuva4oKfLJxiUt9Poej8CLtTCh1E0o81izWt42",
                user_token: "98764197289734652383730749",
            },
            data: {}
        });
    }

}
