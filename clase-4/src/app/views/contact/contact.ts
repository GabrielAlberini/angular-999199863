import { Component } from '@angular/core';
import { Header } from '../../components/header/header';
import { Footer } from '../../components/footer/footer';
import { FormBuilder, Validator, ReactiveFormsModule, Validators } from "@angular/forms"


@Component({
  selector: 'app-contact',
  imports: [Header, Footer, ReactiveFormsModule],
  templateUrl: './contact.html',
  styleUrl: './contact.css'
})
export class Contact {
  contactForm;

  constructor(private fb: FormBuilder) {
    const { required, minLength, email } = Validators
    this.contactForm = this.fb.group({
      nombre: ["", [required, minLength(3)]],
      email: ["", [required, email]],
      mensaje: ["", [required, minLength(10)]]
    })
  }

  onSubmit() {
    if (this.contactForm.valid) {
      alert("Mensaje enviado")
    } else {
      alert("Hay errores al enviar el form")
    }
  }
}
