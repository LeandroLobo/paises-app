import { Component } from '@angular/core';
import { Pais } from '../../interfaces/pais.model';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-capital',
  templateUrl: './por-capital.component.html',
  styles: []
})
export class PorCapitalComponent {

  hayError: boolean;
  errorMessage: string;
  paises: Pais[] = [];
  termino: string;
  placeholder = 'Buscar capital...';

  constructor(
    private paisService: PaisService
  ) {}

  buscar(termino: string) {
    this.hayError = false;
    this.termino = termino;
    this.paisService.buscarCapital(termino)
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
