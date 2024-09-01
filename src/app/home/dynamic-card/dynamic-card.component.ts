import { Component } from '@angular/core';
import { ThemeServiceService } from '../../theme-service.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-dynamic-card',
  standalone: true,
  imports: [],
  templateUrl: './dynamic-card.component.html',
  styleUrl: './dynamic-card.component.css',
})
export class DynamicCardComponent {
  isComponentBGDark: boolean = false;
  private themeSubscription?: Subscription;

  constructor(private themeService: ThemeServiceService) {}

  ngOnInit() {
    this.themeSubscription = this.themeService
      .getGlobalDark()
      .subscribe((isDark) => {
        this.isComponentBGDark = isDark;
      });
  }

  ngOnDestroy() {
    if (this.themeSubscription) {
      this.themeSubscription.unsubscribe();
    }
  }
}
