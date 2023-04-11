import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { LoginModule } from './login-module';
import { LoginForm } from './types/login';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  standalone: true,
  imports: [LoginModule]
})
export class LoginComponent implements OnInit {
  showPassword = false;
  forgotPassword = false;
  emailForgot = new FormControl<string>('');
  // init form in constructor
  loginForm!: FormGroup<LoginForm>;
  constructor(private fb: FormBuilder,
    private router: Router) {
    this.loadForm();
  }

  ngOnInit() {
  }
  register() {
    this.router.navigate(['/register'])
  }
  loadForm() {
    this.loginForm = this.fb.nonNullable.group<LoginForm>({
      email: this.fb.nonNullable.control('', [Validators.required]),
      password: this.fb.nonNullable.control('', [Validators.required])
    })
  }
}
