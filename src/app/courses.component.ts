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
        <h2>{{ title | uppercase }}</h2>
        <div>{{ timeStamp | date:'yyyy-MM-dd HH:mm' }}</div>
        <ul>
            <li *ngFor="let course of courses">{{ course }}
             {{ price | currency:'EUR':true }}</li>
        </ul>
        <img [src]="imageUrl" />
        <table>
            <tr>
                <td [attr.colspan]="colSpan">aap</td>
            </tr>
        </table>
        <input [(ngModel)]="email" (keyup.enter)="onKeyUp()" />
        <p>{{ text | summary:'30' }}</p>
    `
})

export class CoursesComponent {
    text = `
        this is a very long text because it has to be a very long text otherwise I cannot use this as a test.
    `
    isActive = true;
    title = 'List of courses';
    imageUrl = 'http://lorempixel.com/400/200';
    courses;
    price = 21.5;
    timeStamp = new Date();
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
    email = 'aap@noot.com';
    onKeyUp() {
        this.title = this.email;
    }
}
