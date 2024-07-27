import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { EducationComponent } from './education/education.component';
import { ExperienceComponent } from './experience/experience.component';

const routeConfig: Routes = [
  { path: 'home', component: HomeComponent, title: 'Home' },
  {
    path: 'education',
    component: EducationComponent,
    title: 'Education',
  },
  { path: 'experience', component: ExperienceComponent, title: 'Experience' },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
];

export default routeConfig;
