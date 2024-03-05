import { Component } from '@angular/core';
import { Character } from '../interfaces/character.interface';

@Component({
  selector: 'app-dbz-main-page',
  templateUrl: './main-page.component.html',
})
export class MainPageComponent {
  constructor() {}

  onNewCharacter(character: Character): void {
    console.log('Main Page Component');
    console.log(character);
    this.characters.push(character);
  }

  public characters: Character[] = [
    { name: 'Goku', power: 10000 },
    { name: 'Vegeta', power: 9500 },
    { name: 'Trunks', power: 9000 },
    { name: 'Krillin', power: 5000 },
  ];

  public onDeleteCharacter(index: number): void {
    console.log('Borrando en MAIN', index);
    this.characters.splice(index, 1);
  }

  ngOnInit() {}
}
