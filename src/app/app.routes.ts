import { Routes } from '@angular/router';
import { WatchDescription } from './features/home/components/watch-description/watch-description';
import { Home } from './features/home/home';
import { MainLayout } from './layout/main-layout/main-layout';

export const routes: Routes = [
  {
    path: "",
    component: MainLayout,
    children: [
      {
        path: "",
        component: Home
      },
      {
        path: "description/:id",
        component: WatchDescription
      }
    ]
  }
];
