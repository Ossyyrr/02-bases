import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'app-dbz-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css',
})
export class ListComponent {
  @Input() // Recibe del componente padre el valor de la propiedad characterList
  public characterListChild: Character[] = [{ name: 'Vulma', power: 600 }];

  @Output() // Envia el evento al padre
  public onDeleteIdEventChild: EventEmitter<number> = new EventEmitter();

  onDeleteCharacter(index: number): void {
    console.log('Mandando evento onDeleteIdEventChild - ', index);
    this.onDeleteIdEventChild.emit(index);
  }
}
