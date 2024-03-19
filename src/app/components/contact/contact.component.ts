import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { ForbiddenInputDirective } from 'src/app/directives/forbidden-input.directive';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ForbiddenInputDirective,
  ],
})
export class ContactComponent {
  submitted = false;

  // /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im - PATTERN FOR PHONE NUMBER
  form = new FormGroup({
    name: new FormControl('', [
      Validators.required,
      Validators.pattern(/^[^.]*$/),
    ]),
    address: new FormControl('', Validators.required),
    phone: new FormControl('', Validators.required),
  });

  onSubmit(): void {
    this.form.reset();
    Swal.fire({
      title: 'Success!',
      text: 'lorem text',
      icon: 'success',
    });
  }
}
