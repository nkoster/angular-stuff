import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { CoursesComponent } from './courses.component';
import { CourseComponent } from './course/course.component';
import { SummaryPipe } from './summary.pipe';
import { FavoriteComponent } from './favorite/favorite.component';
import { TitleCasePipe } from './title-case.pipe';
import { LikeComponent } from './like/like.component';
import { InputFormatDirective } from './input-format.directive';
import { ZippyComponent } from './zippy/zippy.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { SignupFormComponent } from './signup-form/signup-form.component';
import { NewCourseFormComponent } from './new-course-form/new-course-form.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { PostsComponent } from './posts/posts.component';
import { HttpModule } from '@angular/http';
import { ErrorHandler } from '@angular/core';
import { AppErrorHandler } from './common/error-handler';
import { GithubFollowersComponent } from './github-followers/github-followers.component';

import { CoursesService } from './services/courses.service';
import { PostService } from './services/post.service';
import { DataService } from './services/data.service';
import { GithubFollowersService } from './services/github-followers.service';
import { GithubProfileComponent } from './github-profile/github-profile.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './notfound/notfound.component';
import { RouterModule } from '@angular/router';
import { ArchiveComponent } from './archive/archive.component';

@NgModule({
    declarations: [
      AppComponent,
      CourseComponent,
      CoursesComponent,
      SummaryPipe,
      FavoriteComponent,
      TitleCasePipe,
      LikeComponent,
      InputFormatDirective,
      ZippyComponent,
      ContactFormComponent,
      SignupFormComponent,
      NewCourseFormComponent,
      ChangePasswordComponent,
      PostsComponent,
      GithubFollowersComponent,
      GithubProfileComponent,
      NavbarComponent,
      HomeComponent,
      NotFoundComponent,
      ArchiveComponent
    ],
    imports: [
      BrowserModule,
      FormsModule,
      ReactiveFormsModule,
      HttpModule,
      RouterModule.forRoot([
        {
          path: '',
          component: HomeComponent
        },
        {
          path: 'archive/:year/:month', component: ArchiveComponent
        },
        {
          path: 'followers/:id/:username',
          component: GithubProfileComponent
        },
        {
          path: 'followers',
          component: GithubFollowersComponent
        },
        {
          path: 'posts',
          component: PostsComponent
        },
        {
          path: '**',
          component: NotFoundComponent
        },
      ])
    ],
    providers: [
      DataService,
      PostService,
      CoursesService,
      GithubFollowersService,
      { provide: ErrorHandler, useClass: AppErrorHandler }
    ],
    bootstrap: [AppComponent]
  })
  export class AppModule { }
  