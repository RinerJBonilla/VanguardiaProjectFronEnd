import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PropetarioService {

  private baseUrl = 'http://localhost:8080/springboot-crud-rest/api/v1/propetarios';

  constructor(private http: HttpClient) { }

  getPropetario(id: number): Observable<any>{
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  createPropetario(propetario: Object): Observable<Object>{
    return this.http.post(`${this.baseUrl}`, propetario);
  }

  updatePropetario(id: number, value: any): Observable<Object>{
    return this.http.put(`${this.baseUrl}/${id}`, value);
  }

  deletePropetario(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`, { responseType: 'text' });
  }

  getListPropetarios(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }
}
