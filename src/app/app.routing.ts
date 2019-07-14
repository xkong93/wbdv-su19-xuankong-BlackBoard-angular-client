import {Routes, RouterModule} from '@angular/router';
import {LoginComponent} from './login/login.component';
import {RegisterComponent} from './register/register.component';
import {ProfileComponent} from './profile/profile.component';
import {CourseNavigatorComponent} from './course-navigator/course-navigator.component';
import {CourseListComponent} from './course-list/course-list.component';
import {CourseViewerComponent} from './course-viewer/course-viewer.component';

const appRoutes: Routes = [
  {path: 'login', component: LoginComponent, pathMatch: 'full'},
  {path: 'register', component: RegisterComponent, pathMatch: 'full'},
  {path: 'profile/:userId', component: ProfileComponent, pathMatch: 'full'},
  {path: 'columns', component: CourseNavigatorComponent, pathMatch: 'full'},
  {path: 'courses', component: CourseListComponent, pathMatch: 'full'},
  {path: 'courses/:cid', component: CourseViewerComponent, pathMatch: 'full'},
  {path: 'courses/:cid/modules/:mid', component: CourseViewerComponent, pathMatch: 'full'},
  {path: 'courses/:cid/modules/:mid/lessons/:lid', component: CourseViewerComponent, pathMatch: 'full'},
  {path: 'courses/:cid/modules/:mid/lessons/:lid/topics/:tid', component: CourseViewerComponent, pathMatch: 'full'},
  {path: 'courses/:cid/modules/:mid/lessons/:lid/topics/:tid/widgets', component: CourseViewerComponent, pathMatch: 'full'}
];

export const routing = RouterModule.forRoot(appRoutes);
