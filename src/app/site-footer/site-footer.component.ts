import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { ThemeServiceService } from '../theme-service.service';

@Component({
  selector: 'app-site-footer',
  standalone: true,
  imports: [],
  templateUrl: './site-footer.component.html',
  styleUrl: './site-footer.component.css',
})
export class SiteFooterComponent {
  isComponentBGDark: boolean = false;
  private themeSubscription?: Subscription;
  emailUrl: string = '/assets/mailDark.svg';
  githubUrl: string = '/assets/githubDark.svg';

  constructor(private themeService: ThemeServiceService) {}

  ngOnInit() {
    this.themeSubscription = this.themeService
      .getGlobalDark()
      .subscribe((isDark) => {
        this.isComponentBGDark = isDark;
        this.changeEmailUrl();
        this.changeGithubUrl();
      });
  }

  ngOnDestroy() {
    if (this.themeSubscription) {
      this.themeSubscription.unsubscribe();
    }
  }

  changeEmailUrl() {
    if (this.isComponentBGDark) {
      this.emailUrl = '/assets/mailLight.svg';
    } else {
      this.emailUrl = '/assets/mailDark.svg';
    }
  }
  changeGithubUrl() {
    if (this.isComponentBGDark) {
      this.githubUrl = '/assets/githubDark.svg';
    } else {
      this.githubUrl = '/assets/githubLight.svg';
    }
  }
}
