import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from '../../../../core/services/data-service';
import { WatchModel } from '../watch-card/watch-card';

@Component({
  selector: 'app-watch-description',
  imports: [],
  templateUrl: './watch-description.html',
  styleUrl: './watch-description.scss'
})
export class WatchDescription implements OnInit {
  private readonly activatedRoute = inject(ActivatedRoute);
  private readonly router = inject(Router);
  private readonly dataService = inject(DataService);
  protected selectedWatch?: WatchModel;

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(param => {
      const id = Number(param.get("id"));

      this.selectedWatch = this.dataService.watches.find(x => x.id == id);
    });
  }

  protected back() {
    this.router.navigate(['']);
  }
}
