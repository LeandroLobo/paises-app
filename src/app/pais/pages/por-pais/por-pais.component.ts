import { PaisService } from './../../services/pais.service';
import { Component } from '@angular/core';
import { Pais } from '../../interfaces/pais.model';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styles: []
})
export class PorPaisComponent {

  hayError: boolean;
  errorMessage: string;
  paises: Pais[] = [];
  termino: string;
  placeholder = 'Buscar país...';

  constructor(
    private paisService: PaisService
  ) {}

  buscar(termino: string) {
    this.hayError = false;
    this.termino = termino;
    this.paisService.buscarPais(termino)
      .subscribe(
        res => {
          this.paises = res;
        },
        err => {
          this.paises = [];
          this.hayError = true;
          this.errorMessage = err.error.message;
        }
      );
  }

  sugerencias(termino: string) {
    this.hayError = false;
  }

}
