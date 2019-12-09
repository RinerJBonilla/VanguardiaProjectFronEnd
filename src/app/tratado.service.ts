import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TratadoService {

  private baseUrl = 'http://localhost:3000/tratados';

  constructor(private http: HttpClient) { }

  getTratado(id: string): Observable<any>{
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  createTratado(tratado: Object): Observable<Object>{
    return this.http.post(`${this.baseUrl}`, tratado);
  }

  updateTratado(id: string, value: any): Observable<Object>{
    return this.http.patch(`${this.baseUrl}/${id}`, value);
  }

  deleteTratado(id: string): any {
    return this.http.delete(`${this.baseUrl}/${id}`);
  }

  getListTratados(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }
}
