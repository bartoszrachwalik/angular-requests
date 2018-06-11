import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable()
export class ServerService {

  constructor(private http: HttpClient) {
  }

  storeServers(servers: any[]) {
    const headers = new HttpHeaders({'Content-Type': 'application/json'});
    return this.http.post(
      'https://angular-requests.firebaseio.com/data.json',
      servers,
      {headers: headers}
    );
  }

}
