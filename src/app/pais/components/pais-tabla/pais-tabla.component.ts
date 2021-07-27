import { Component, Input } from '@angular/core';
import { Pais } from '../../interfaces/pais.model';

@Component({
  selector: 'app-pais-tabla',
  templateUrl: './pais-tabla.component.html',
  styles: [
    `.small-flag {
      width: 50px;
    }`
  ]
})
export class PaisTablaComponent {

  @Input() paises: Pais[] = [];

}
