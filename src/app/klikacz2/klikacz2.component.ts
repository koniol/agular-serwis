import { Component, OnInit } from '@angular/core';
import { ClickService } from '../services/click.service';

@Component({
  selector: 'app-klikacz2',
  templateUrl: './klikacz2.component.html',
  styleUrls: ['./klikacz2.component.css'],

})
export class Klikacz2Component implements OnInit {

  counter: number = 0;

  constructor(private clickService: ClickService) { }

  increment(){
    this.counter++;
    this.clickService.addClick();
  }

  ngOnInit() {
  }

}
