import { Component, signal } from '@angular/core';
import { Drawer } from 'primeng/drawer';
@Component({
  selector: 'app-navbar',
  imports: [Drawer],
  templateUrl: './navbar.html',
  styleUrl: './navbar.scss',
})
export class Navbar {
  protected isDrawerVisisble = signal<boolean>(false);
}
