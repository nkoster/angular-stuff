import { Component } from '@angular/core';
import { CoursesService } from './courses.service';

@Component({
    selector: 'courses',
    template: `
        <div (click)="onDivClick()">
            <button
                class="btn btn-primary"
                [class.active]="isActive"
                [style.backgroundColor]="isActive ? 'blue' : 'red'"
                (click)="onSave($event)">Save</button>
        </div>
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
        $event.stopPropagation();
        console.log(`click: ${$event.clientX}`)
    }
    onDivClick() {
        console.log('DIV click')
    }
}
