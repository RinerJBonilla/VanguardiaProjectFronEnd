import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PropiedadService {

  private baseUrl = 'http://localhost:8080/springboot-crud-rest/api/v1/propiedades';

  constructor(private http: HttpClient) { }

  getPropiedad(id: number): Observable<any>{
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  createPropiedad(propiedad: Object): Observable<Object>{
    return this.http.post(`${this.baseUrl}`, propiedad);
  }

  updatePropiedad(id: number, value: any): Observable<Object>{
    return this.http.put(`${this.baseUrl}/${id}`, value);
  }

  deletePropiedad(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`, { responseType: 'text' });
  }

  getListPropiedades(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }
}
