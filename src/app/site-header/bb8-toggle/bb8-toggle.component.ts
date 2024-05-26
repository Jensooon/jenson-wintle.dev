import { Component } from '@angular/core';
import { ThemeServiceService } from '../../theme-service.service';

@Component({
  selector: 'app-bb8-toggle',
  standalone: true,
  imports: [],
  templateUrl: './bb8-toggle.component.html',
  styleUrl: './bb8-toggle.component.css',
})
export class Bb8ToggleComponent {
  constructor(private themeService: ThemeServiceService) {}

  toggle() {
    // If you want to set the theme to dark, do this:
    if (this.themeService.getIsDark()) {
      this.themeService.setGlobalDark(false);
    } else {
      this.themeService.setGlobalDark(true);
    }
  }
}
