import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  onSubmit() {
    // Handle form submission logic here
    // You can access form values using ngModel bindings
    // For example: this.contactForm.value.name, this.contactForm.value.email, this.contactForm.value.message

    // You can send the form data to your server or perform other actions as needed
  }
}
