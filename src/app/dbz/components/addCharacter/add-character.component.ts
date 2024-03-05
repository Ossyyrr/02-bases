import { Component, EventEmitter, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'app-add-character',
  templateUrl: './add-character.component.html',
  styleUrl: './add-character.component.css',
})
export class AddCharacterComponent {
  public Character: Character = {
    name: '',
    power: 0,
  };

  @Output()
  public onNewCharacterChild: EventEmitter<Character> = new EventEmitter();

  emitCharacter(): void {
    console.log(this.Character);
    if (this.Character.name.trim().length === 0) return;

    this.onNewCharacterChild.emit({ ...this.Character });

    this.Character = { name: '', power: 0 };
  }
}
