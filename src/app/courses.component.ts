import { Component } from '@angular/core';
import { CoursesService } from './courses.service';

@Component({
    selector: 'courses',
    template: `
        <button
            class="btn btn-primary"
            [class.active]="isActive"
            [style.backgroundColor]="isActive ? 'blue' : 'red'"
            (click)="onSave($event)">Save</button>
        <h2>{{ "Title: " + getTitle() }}</h2>
        <ul>
            <li *ngFor="let course of courses">{{ course }}</li>
        </ul>
        <img [src]="imageUrl" />
        <table>
            <tr>
                <td [attr.colspan]="colSpan">aap</td>
            </tr>
        </table>
    `
})

export class CoursesComponent {
    isActive = true;
    title = 'List of courses';
    imageUrl = 'http://lorempixel.com/400/200';
    courses;
    colSpan = 2;
    constructor(service: CoursesService) {
        this.courses = service.getCourses()
    }
    getTitle() {
        return this.title
    }
    onSave($event) {
        console.log(`click: ${$event}`)
    }
}
