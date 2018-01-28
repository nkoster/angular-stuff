import { Component } from '@angular/core';

@Component({
    selector: 'courses',
    template: '<h2>{{ "Title: " + getTitle() }}</h2>'
})

export class CoursesComponent {
    title = 'Apen - Courses';
    courses = ['course1', 'course2', 'course3'];
    getTitle() {
        return this.title
    }
}
