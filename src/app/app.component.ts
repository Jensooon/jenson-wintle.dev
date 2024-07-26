import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { SiteHeaderComponent } from './site-header/site-header.component';
import { SiteFooterComponent } from './site-footer/site-footer.component';
import { HomeComponent } from './home/home.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    SiteHeaderComponent,
    SiteFooterComponent,
    RouterLink,
    RouterLinkActive,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'jenson-wintle.dev';
}
