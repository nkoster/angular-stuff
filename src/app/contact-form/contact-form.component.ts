import { Component } from '@angular/core';

@Component({
  selector: 'contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent {

  contactMethods = [
    { id: 0, name: 'Email' },
    { id: 1, name: 'Phone' },
    { id: 2, name: 'Whatsapp' },
  ];

  log(value) {
    console.log(value)
  }

  submit(f) {
    console.log(f.value.contact.firstName);
    console.log(f.value.contact.comment);
  }

}
