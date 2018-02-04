import { Component } from '@angular/core';
import { onFavoriteChangedEventArgs } from './favorite/favorite.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Niels';
  post = {
    title: 'Post 1',
    isFavorite: true
  }
  tweet = {
    body: '...',
    likesCount: 10,
    isLiked: true
  }
  courses = [];
  viewMode = 'list';
  task = {
    title: 'review app',
    assignee: null
  }
  onFavoriteChanged(eventArgs: onFavoriteChangedEventArgs) {
    console.log('Favorite changed: ' + eventArgs.newValue)
  }
  onAdd() {
    this.courses.push({ id: 5, name: 'Course D'})
  }
  onRemove(course) {
    let index = this.courses.indexOf(course);
    this.courses.splice(index, 1)
  }
  loadCourses() {
    this.courses = [
      { id: 0, name: 'Intro'},
      { id: 1, name: 'Course A'},
      { id: 2, name: 'Course B'},
      { id: 3, name: 'Course C'}
    ]
  }
  trackCourse(index, course) {
    return course ? course.id : undefined
  }
  case: string = 'lowercase';
  switchCase() {
    if (this.case == 'uppercase') {
      this.case = 'lowercase'
    } else {
      this.case = 'uppercase' 
    }
  }
}
