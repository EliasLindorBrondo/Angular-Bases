import { Injectable } from '@angular/core';
import { Character } from '../interfaces/character.interface';
import {v4 as ID} from 'uuid'

@Injectable({
  providedIn: 'root'
})
export class DbzService {

  public characters: Character[] = [{
    id: ID(),
    name: 'Krillin',
    power: 500
  },
  {
    id: ID(),
    name: 'Goku',
    power: 10000
  }];

  addCharacter(character : Character):void{

    const newCharacter = {id: ID(), ...character}
    this.characters.push(newCharacter);

  }

  // onDeleteCharacter(index : number):void{
  //   this.characters.splice(index,1)
  // }

  DeleteCharacterById(id : string):void{
    this.characters = this.characters.filter(character => character.id !== id)
  }

}
