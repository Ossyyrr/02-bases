import { Component } from '@angular/core';
import { Character } from '../interfaces/character.interface';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-dbz-main-page',
  templateUrl: './main-page.component.html',
})
export class MainPageComponent {
  constructor(
    // forma corta de crear una clase,
    // se crea la propiedad dbzService,
    public dbzService: DbzService // al ser publico de meja usarla en todo el servicio
  ) {}

  ngOnInit() {}
}
