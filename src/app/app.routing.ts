import {Routes, RouterModule} from '@angular/router';
import {LoginComponent} from './login/login.component';
import {RegisterComponent} from './register/register.component';
import {ProfileComponent} from './profile/profile.component';
import {CourseNavigatorComponent} from './course-navigator/course-navigator.component';
import {CourseListComponent} from './course-list/course-list.component';
import {CourseViewerComponent} from './course-viewer/course-viewer.component';

const appRoutes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'profile/:userId', component: ProfileComponent},
  {path: 'columns', component: CourseNavigatorComponent},
  {path: 'courses', component: CourseListComponent},
  {path: 'courses/:cid', component: CourseViewerComponent},
  {path: 'courses/:cid/modules/:mid', component: CourseViewerComponent},
  {path: 'courses/:cid/modules/:mid/lessons/:lid', component: CourseViewerComponent}


];
export const routing = RouterModule.forRoot(appRoutes);
