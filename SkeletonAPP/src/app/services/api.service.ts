import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable} from 'rxjs';
import { map } from 'rxjs/operators';

interface ApiResponse {
  data: any[];
  message: string;
}

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private BASE_URL = 'https://fiber-production-3dcc.up.railway.app/cities/';

  constructor(private http: HttpClient) { }

  getAll(): Observable<any> {
    return this.http.get<ApiResponse>(this.BASE_URL).pipe(
        map(response => response.data)
    );
  }
  
  create(payload: any): Observable<any> {
    return this.http.post(this.BASE_URL, payload);
  }

  getById(id: string): Observable<any> {
    return this.http.get(this.BASE_URL + id);
  }
}