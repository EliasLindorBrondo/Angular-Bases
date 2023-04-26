import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent {

  public name: string = 'Iroman';
  public Realname: string = 'Tony';
  public age: number = 45;

get Capitalized():string{
  return 'Capitalizado'.toUpperCase();
}

getDescriptionHero():string{
  return `${this.name} - ${this.age}`;
}

getHero():void{
  this.name = 'Capitan America';
}

getAge():void{
  this.age = 30;
}

Reset():void{
  this.name = 'Iroman';
  this.age = 45;

  // document.querySelector('h1')!.innerHTML = 'Mi segunda app';
}
}
