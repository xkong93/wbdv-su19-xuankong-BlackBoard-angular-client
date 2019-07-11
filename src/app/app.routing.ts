import {Routes, RouterModule} from '@angular/router';
import {LoginComponent} from './login/login.component';
import {RegisterComponent} from './register/register.component';
import {ProfileComponent} from './profile/profile.component';
import {CourseNavigatorComponent} from './course-navigator/course-navigator.component';
import {ModuleComponent} from './module/module.component';

const appRoutes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'profile/:userId', component: ProfileComponent},
  {path: 'columns', component: CourseNavigatorComponent},
  {path: 'course/:cid/module', component: ModuleComponent}


];
export const routing = RouterModule.forRoot(appRoutes);
