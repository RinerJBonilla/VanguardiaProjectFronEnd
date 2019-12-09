import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Propietario} from './propetario';

@Injectable({
  providedIn: 'root'
})
export class PropetarioService {

  private baseUrl = 'http://localhost:3000/propietarios';

  constructor(private http: HttpClient) { }

  getPropetario(id: string): Observable<any>{
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  createPropetario(propietario: Object): Observable<Object>{
    return this.http.post(`${this.baseUrl}`, propietario);
  }

  updatePropetario(id: string, value: any): Observable<Object>{
    return this.http.patch(`${this.baseUrl}/${id}`, value);
  }

  deletePropetario(id: string): any {
    return this.http.delete(`${this.baseUrl}/${id}`);
  }

  getListPropetarios(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }
}
