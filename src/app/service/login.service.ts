import { AppError } from './../common/app-error';
import { NotFoundError } from './../common/not-found-error';
import {Injectable} from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/catch';

@Injectable()
export class LoginService {
    token: String;

    constructor(private http: HttpClient) {}

    sendCredentials(model) {
        const userUrl = 'http://localhost:8080/robbie/user/login';
        const headers1 = new HttpHeaders({'Content-Type': 'application/json'});
        return this.http.post(userUrl, JSON.stringify(model), {headers: headers1, observe: 'response', responseType: 'text'});
    }

    sendToken(token: string): Observable<Object> {
        const tokenUrl = 'http://localhost:8080/robbie/rest/user/users';
        const headers2 = new HttpHeaders({'Authorization': 'Bearer ' + token});
        return this.http.get(tokenUrl, {headers: headers2})
            .catch(this.handleError);
    }

    checkLogin() {
        if ((localStorage.getItem('token') !== '' && localStorage.getItem('token') != null) &&
            (localStorage.getItem('currentUserName') !== '' && localStorage.getItem('currentUserName') != null)) {
            return true;
        } else {
            return false;
        }
    }

    logout() {
        localStorage.setItem('token', '');
        localStorage.setItem('currentUserName', '');
        alert('You just logged out!');
    }

    private handleError(error: Response) {
        if (error.status === 404) {
            return Observable.throw(new NotFoundError());
        }
        return Observable.throw(new AppError(error));
    }
}
