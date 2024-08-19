import { Component } from '@angular/core';
import { ThemeServiceService } from '../../theme-service.service';

@Component({
  selector: 'app-mobile-toggle',
  standalone: true,
  imports: [],
  templateUrl: './mobile-toggle.component.html',
  styleUrl: './mobile-toggle.component.css',
})
export class MobileToggleComponent {
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
