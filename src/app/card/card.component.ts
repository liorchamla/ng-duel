import { Component, OnInit, Input } from "@angular/core";
import { Card } from "src/game/Card";

@Component({
  selector: "app-card",
  template: `
    <div
      class="body"
      [ngStyle]="{
        backgroundImage: card.hidden ? '' : 'url(' + card.image + ')',
        backgroundColor: card.hidden ? 'brown' : ''
      }"
    >
      <div class="header {{ card.effect.type }}" *ngIf="!card.hidden">
        ICONE
      </div>

      <span *ngIf="!card.hidden">
        {{ card.title }}
      </span>
    </div>
  `,
  styles: [
    `
      div.header {
        padding: 10px;
        text-align: center;
        color: white;
      }

      div.header.victory {
        background-color: navy;
      }

      div.header.science {
        background-color: green;
      }

      div.header.war {
        background-color: firebrick;
      }

      div.header.resource {
        background-color: brown;
      }

      div.header.commerce {
        background-color: gold;
      }

      div.body {
        background-size: cover;
        background-position: center;
        height: 100%;
      }
      span {
        background-color: #eee;
        color: black;
        text-transform: uppercase;
        position: absolute;
        bottom: 10px;
        left: 50%;
        transform: translateX(-50%);
        padding: 5px 10px;
        border-radius: 5px;
        text-align: center;
      }
    `
  ]
})
export class CardComponent implements OnInit {
  @Input("details")
  card: Card;

  constructor() {}

  ngOnInit() {}
}
