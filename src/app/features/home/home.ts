import { Component, inject } from '@angular/core';
import { DataService } from '../../core/services/data-service';
import { WatchCard } from "./components/watch-card/watch-card";

@Component({
  selector: 'app-home',
  imports: [
    WatchCard
  ],
  templateUrl: './home.html',
  styleUrl: './home.scss'
})
export class Home {
  public readonly dataService = inject(DataService);
  protected scrollTo(id: string) {
    document.getElementById(id)?.scrollIntoView({
      behavior: 'smooth'
    });
  }



}
