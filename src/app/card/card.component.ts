import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  template: `
    <div class="card">
      <div class="card-body">
      <h5 class="card-title"></h5>
      <p class="card-text">
        <ng-content></ng-content>
      </p>
    </div>
    </div>
  `
})

export class CardComponent implements OnInit {
  constructor() { }

  ngOnInit() {
  }

}