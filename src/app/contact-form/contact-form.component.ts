import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  log(value) {
    console.log(value)
  }

  submit(f) {
    console.log(f.value.contact.firstName);
    console.log(f.value.contact.comment);
  }

}
