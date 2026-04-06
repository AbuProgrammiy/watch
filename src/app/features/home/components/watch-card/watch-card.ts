import { Component, input } from '@angular/core';

@Component({
  selector: 'app-watch-card',
  imports: [],
  templateUrl: './watch-card.html',
  styleUrl: './watch-card.scss'
})
export class WatchCard {
  public watch = input<WatchModel>();
}

export interface WatchModel {
  name: string;
  description: string;
  price: string;
  imgUrl: string;
}