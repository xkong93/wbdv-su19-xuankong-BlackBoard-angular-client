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
import { ModuleComponent } from './module/module.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    ProfileComponent,
    CourseNavigatorComponent,
    ModuleComponent
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
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
