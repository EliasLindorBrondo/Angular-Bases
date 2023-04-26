import { Component} from "@angular/core";
import { AppComponent} from "src/app/app.component";



@Component({
  selector: 'app-counter',
  template: `
<hr>
<p>Angular {{counter}}</p>
<div >
  <button (click)="decrementBy(1)" style="margin-right: 5px; border-radius: 10px; border: none; color: aqua; background-color: black;" id="btn">-1</button>
  <button (click)="resetBy(10)" style="border-radius: 10px ; border: none; color: aqua; background-color: black;" id="btnm">Reset</button>
  <button (click)="increaseBy(1)" style="margin-left:5px; border-radius: 10px ; border: none; color: aqua; background-color: black;" id="btnm">+1</button>
</div>
  `
})

export class CounterComponent {

  public counter: number = 10;

  public increaseBy(value:number) {
    this.counter += value;
  }
  public decrementBy(value:number){
    this.counter -= value;
  }
  resetBy(value:number){
    this.counter = value;
  }
}


