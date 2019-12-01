import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TratadoService {

  private baseUrl = 'http://localhost:8080/springboot-crud-rest/api/v1/tratados';

  constructor(private http: HttpClient) { }

  getTratado(id: number): Observable<any>{
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  createTratado(tratado: Object): Observable<Object>{
    return this.http.post(`${this.baseUrl}`, tratado);
  }

  updateTratado(id: number, value: any): Observable<Object>{
    return this.http.put(`${this.baseUrl}/${id}`, value);
  }

  deleteTratado(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`, { responseType: 'text' });
  }

  getListTratados(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }
}
