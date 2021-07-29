import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap, tap } from 'rxjs/operators';
import { PaisService } from '../../services/pais.service';
import { Pais } from '../../interfaces/pais.model';

@Component({
  selector: 'app-ver-pais',
  templateUrl: './ver-pais.component.html',
  styles: []
})
export class VerPaisComponent implements OnInit {

  pais!: Pais;

  constructor(
    private activatedRoute: ActivatedRoute,
    private paisService: PaisService
  ) { }

  ngOnInit(): void {
    // callback hell!!!!
    // this.activatedRoute.params
    //   .subscribe(
    //     ({id}) => {
    //       this.paisService.getPaisByAlphaId(id)
    //         .subscribe(
    //           pais => {}
    //         );
    //     }
    //   );
    this.activatedRoute.params.pipe(
      switchMap(({id}) => this.paisService.getPaisByAlphaId(id)),
      tap(console.log)
    ).subscribe(pais => {
      setTimeout(() => {
        this.pais = pais;
      }, 1000);
    });
  }

}
