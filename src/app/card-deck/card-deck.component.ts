import { Component, OnInit, Input } from "@angular/core";
import { Card, Cards } from "src/game/Card";
import { CardBuilder } from "src/game/cards/CardBuilder";
import { HttpClient } from "@angular/common/http";
import { map } from "rxjs/operators";

@Component({
  selector: "app-card-deck",
  template: `
    <div class="deck">
      <div *ngFor="let position of positions" class="row">
        <app-card *ngFor="let card of position" [details]="card"></app-card>
      </div>
    </div>
  `,
  styles: [
    `
      .deck {
        display: flex;
        flex-direction: column;
      }

      .row {
        display: flex;
        margin-bottom: -100px;
        justify-content: center;
      }

      app-card {
        width: 150px;
        height: 200px;
        border: 3px solid black;
        margin: 0 10px;
        position: relative;
      }

      app-card:hover {
        z-index: 999;
      }
    `
  ]
})
export class CardDeckComponent implements OnInit {
  positions: Cards[] = [];

  @Input()
  era: number = 1;

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.http
      .get("/assets/era-1.json")
      .subscribe((era: { positions: string[]; cards: Cards }) => {
        const positions = era.positions;
        const cards = era.cards;

        cards.sort(() => Math.random() - 0.5);

        const cardsPositions = positions.map(position =>
          position.split("").map(letter => {
            const card = cards.pop();

            if (letter === "*") {
              return { ...card, hidden: false };
            }
            return { ...card, hidden: true };
          })
        );

        this.positions = cardsPositions;
      });
  }
}
