import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ProfileComponent } from './profile/profile.component';
import {routing} from './app.routing';
import {FormsModule} from '@angular/forms';
import {UserService} from './services/user.service.client';
import {CourseNavigatorServiceClient} from './services/CourseNavigatorServiceClient';
import { CourseNavigatorComponent } from './course-navigator/course-navigator.component';
import {ModuleServiceClient} from './services/ModuleServiceClient';
import { CourseListComponent } from './course-list/course-list.component';
import { CourseViewerComponent } from './course-viewer/course-viewer.component';
import { ModuleListComponent } from './module-list/module-list.component';
import { LessonTabsComponent } from './lesson-tabs/lesson-tabs.component';
import {LessonServiceClient} from './services/LessonServiceClient';
import { TopicPillsComponent } from './topic-pills/topic-pills.component';
import {TopicServiceClient} from './services/TopicServiceClient';
import { WidgetListComponent } from './widget-list/widget-list.component';
import {WidgetServiceClient} from './services/WidgetServiceClient';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    ProfileComponent,
    CourseNavigatorComponent,
    CourseListComponent,
    CourseViewerComponent,
    ModuleListComponent,
    LessonTabsComponent,
    TopicPillsComponent,
    WidgetListComponent,
  ],
  imports: [
    routing,
    BrowserModule,
    FormsModule
  ],
  providers: [
    UserService,
    CourseNavigatorServiceClient,
    ModuleServiceClient,
    LessonServiceClient,
    TopicServiceClient,
    WidgetServiceClient
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
