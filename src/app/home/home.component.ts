import { Component } from '@angular/core';
import { ThemeServiceService } from '../theme-service.service';
import { Subscription } from 'rxjs';
import { ScrollRevealDirective } from '../scroll-reveal.directive';
import { UserCardComponent } from './user-card/user-card.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ScrollRevealDirective, UserCardComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
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
