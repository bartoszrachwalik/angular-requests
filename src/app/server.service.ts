import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {map} from 'rxjs/operators';

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
    return this.http.get('https://angular-requests.firebaseio.com/data.json')
      .pipe(map(
        (response: any[]) => {
          const data = response;
          return data;
        }
      ));
  }

}
