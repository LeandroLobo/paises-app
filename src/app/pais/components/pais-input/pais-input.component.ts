import { Component, EventEmitter, Output, OnInit, Input } from '@angular/core';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-pais-input',
  templateUrl: './pais-input.component.html'
})
export class PaisInputComponent implements OnInit{

  termino: string;
  invalido: boolean;
  @Input() placeholder = 'Buscar...';
  @Output() searchEnter: EventEmitter <string> = new EventEmitter();
  @Output() searchDebounce: EventEmitter <string> = new EventEmitter();
  debouncer: Subject<string> = new Subject();

  ngOnInit(): void {
    this.debouncer
      .pipe(debounceTime(300))
      .subscribe(
        valor => {
          this.searchDebounce.emit(valor);
        }
      );
  }

  onKeyPress() {
    this.debouncer.next(this.termino);
  }

  emitTermino() {
    if (!this.termino) {
      this.invalido = true;
      return;
    } else {
      this.invalido = false;
    }
    this.searchEnter.emit(this.termino);
  }

}
