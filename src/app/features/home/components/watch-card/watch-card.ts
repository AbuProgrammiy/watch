import { Component, inject, input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-watch-card',
  imports: [],
  templateUrl: './watch-card.html',
  styleUrl: './watch-card.scss'
})
export class WatchCard {
  private readonly router = inject(Router);


  public watch = input<WatchModel>();

  protected navigate() {
    this.router.navigate([`description/${this.watch()?.id}`]);
  }
}

export interface WatchModel {
  id: number;
  name: string;
  description: string;
  longDescription?: string;
  price: string;
  imgUrl: string;
}