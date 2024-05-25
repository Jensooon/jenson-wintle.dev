import { Component } from '@angular/core';
import { Bb8ToggleComponent } from './bb8-toggle/bb8-toggle.component';

@Component({
  selector: 'app-site-header',
  standalone: true,
  imports: [Bb8ToggleComponent],
  templateUrl: './site-header.component.html',
  styleUrl: './site-header.component.css',
})
export class SiteHeaderComponent {}
