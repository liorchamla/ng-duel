import { Component, OnInit } from "@angular/core";
import { Card } from "src/game/Card";
import { CardBuilder } from "src/game/cards/CardBuilder";

@Component({
  selector: "app-player-deck",
  template: `
    <p>
      player-deck works!
    </p>
    <app-card *ngFor="let card of cards" [details]="card"></app-card>
  `,
  styles: []
})
export class PlayerDeckComponent implements OnInit {
  cards: Card[] = [];

  constructor() {}

  ngOnInit() {
    const builder = new CardBuilder();

    for (let i = 0; i < 10; i++) {}
  }
}
