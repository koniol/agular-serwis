import { Component, OnInit } from '@angular/core';
import { ClickService } from './services/click.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ClickService]
})
export class AppComponent implements OnInit {
  title = 'app';

  counter;

  constructor(private clickService: ClickService) {

  }

  ngOnInit(): void {
    this.clickService.getSum().subscribe(
      data =>{
        this.counter = data;
      }
    );
  }
}
