import { Component } from '@angular/core';
import { PaisService } from '../../services/pais.service';
import { Pais } from '../../interfaces/pais.model';

@Component({
  selector: 'app-por-region',
  templateUrl: './por-region.component.html',
  styles: []
})
export class PorRegionComponent {

  regiones: string[] = ['africa', 'americas', 'asia', 'europe', 'oceania'];
  regionActiva = '...';
  paises: Pais[] = [];
  hayError: boolean;
  errorMessage: string;
  inited = true;

  constructor(
    private paisService: PaisService
  ) { }

  activarRegion(region: string): void {
    if (region === this.regionActiva) { return; }
    this.inited = false;
    this.regionActiva = region;
    this.paises = [];
    setTimeout(() => {
      this.buscar(region);
    }, 700);
  }

  getCSSClass(region) {
    return (region === this.regionActiva)
      ? 'btn btn-primary m-1'
      : 'btn btn-outline-primary m-1';
  }

  buscar(termino: string) {
    this.hayError = false;
    this.paisService.buscarRegion(termino)
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

}
