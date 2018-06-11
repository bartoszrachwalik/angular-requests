import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders, HttpResponse} from '@angular/common/http';
import {catchError, map} from 'rxjs/operators';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/throw';

@Injectable()
export class ServerService {

  constructor(private http: HttpClient) {
  }

  storeServers(servers: any[]) {
    const headers = new HttpHeaders({'Content-Type': 'application/json'});
    // return this.http.post(
    //   'https://angular-requests.firebaseio.com/data.json',
    //   servers,
    //   {headers: headers}
    // );
    return this.http.put(
      'https://angular-requests.firebaseio.com/data.json',
      servers,
      {headers: headers}
    );
  }

  getServers() {
    // line below causes error intentionally
    return this.http.get('https://angular-requests.firebaseio.com/data')
      .pipe(map(
        (response: any[]) => {
          const data = response;
          for (const server of data) {
            server.name = 'FETCHED_' + server.name;
          }
          return data;
        }
      ), catchError(
        () => {
          return Observable.throw('Something went wrong!');
        }
      ));
  }

  getAppName() {
    return this.http.get('https://angular-requests.firebaseio.com/appName.json')
      .pipe(map(
        (response: HttpResponse<any>) => {
          return response;
        }
      ));
  }

}
