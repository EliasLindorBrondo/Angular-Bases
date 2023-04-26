import { Component } from '@angular/core';
import { HeroComponent } from '../hero/hero.component';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {

  public Heroes: string[] = ['Iroman','Hulk', 'Capitan America','Spiderman']
  public DeleteHero?: string;

  DeleteHr():void{
    this.DeleteHero = this.Heroes.pop();
  }
}
