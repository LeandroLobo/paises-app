import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Pais } from '../interfaces/pais.model';

@Injectable({
  providedIn: 'root'
})
export class PaisService {

  private apiBaseUrl = 'https://restcountries.eu/rest/v2';

  constructor(
    private http: HttpClient
  ) { }

  get httpParams() {
    const params = new HttpParams().set('fields', 'name;capital;population;alpha2Code;flag');
    return {params};
  }

  buscarPais(termino: string): Observable<Pais[]> {
    const url = this.apiBaseUrl + '/name/' + termino;
    return this.http.get<Pais[]>(url, this.httpParams);
  }

  buscarNombrePais(termino: string): Observable<Pais[]> {
    const url = this.apiBaseUrl + '/name/' + termino + '?fields=name';
    return this.http.get<Pais[]>(url);
  }

  buscarCapital(termino: string): Observable<Pais[]> {
    const url = this.apiBaseUrl + '/capital/' + termino;
    return this.http.get<Pais[]>(url, this.httpParams);
  }

  buscarRegion(termino: string): Observable<Pais[]> {
    const url = this.apiBaseUrl + '/region/' + termino;
    return this.http.get<Pais[]>(url, this.httpParams);
  }

  getPaisByAlphaId(id: string): Observable<Pais> {
    const url = this.apiBaseUrl + '/alpha/' + id;
    return this.http.get<Pais>(url);
  }
}
