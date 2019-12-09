import { Component } from "@angular/core";
import { Card } from "src/game/Card";

@Component({
  selector: "app-root",
  template: `
    <app-card-deck></app-card-deck>
    <app-player-deck></app-player-deck>
    <router-outlet></router-outlet>
  `,
  styles: []
})
export class AppComponent {
  title = "duel";

  cards: Card[] = [];
}
