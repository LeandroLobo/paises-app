import { PaisService } from './../../services/pais.service';
import { Component } from '@angular/core';
import { Pais } from '../../interfaces/pais.model';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styles: [
    `.small-flag {
      width: 50px;
    }`
  ]
})
export class PorPaisComponent {

  termino: string;
  invalido: boolean;
  hayError: boolean;
  errorMessage: string;
  paises: Pais[] = [];

  constructor(
    private paisService: PaisService
  ) {}

  buscar() {
    this.hayError = false;
    if (!this.termino) {
      this.invalido = true;
      return;
    } else {
      this.invalido = false;
    }
    this.paisService.buscarPais(this.termino)
      .subscribe(
        res => {
          this.paises = res;
          this.hayError = false;
        },
        err => {
          this.paises = [];
          this.hayError = true;
          this.errorMessage = err.error.message;
        }
      );
  }

}
