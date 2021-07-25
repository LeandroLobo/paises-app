import { HttpClient } from '@angular/common/http';
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

  buscarPais(termino: string): Observable<Pais[]> {
    const url = this.apiBaseUrl + '/name/' + termino;
    return this.http.get<Pais[]>(url);
  }
}
