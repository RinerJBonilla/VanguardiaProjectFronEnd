import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PropiedadService {

  private baseUrl = 'http://localhost:3000/propiedades';

  constructor(private http: HttpClient) { }

  getPropiedad(id: string): Observable<any>{
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  createPropiedad(propiedad: Object): Observable<Object>{
    return this.http.post(`${this.baseUrl}`, propiedad);
  }

  updatePropiedad(id: string, value: any): Observable<Object>{
    return this.http.patch(`${this.baseUrl}/${id}`, value);
  }

  deletePropiedad(id: string): any {
    return this.http.delete(`${this.baseUrl}/${id}`);
  }

  getListPropiedades(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }
}
