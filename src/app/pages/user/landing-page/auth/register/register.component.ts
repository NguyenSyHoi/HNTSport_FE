import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { RegisterModule } from './register-module';
import { RegisterForm } from './types/register';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
  standalone: true,
  imports: [RegisterModule]
})
export class RegisterComponent implements OnInit {
  showPassword = false;
  registerForm!: FormGroup<RegisterForm>;
  constructor(private router: Router,
    private fb: FormBuilder) {
    this.loadForm();
  }


  ngOnInit() {
  }
  loadForm() {
    this.registerForm = this.fb.nonNullable.group<RegisterForm>({
      firstName: this.fb.nonNullable.control('', [Validators.required]),
      lastName: this.fb.nonNullable.control('', [Validators.required]),
      email: this.fb.nonNullable.control('', [Validators.required]),
      password: this.fb.nonNullable.control('', [Validators.required]),
    })
  }
  login(){
    this.router.navigate(['/login']);
  }
}
