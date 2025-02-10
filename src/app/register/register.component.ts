import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  username = '';
  password = '';

  constructor(private authService: AuthService, private router: Router) { }

  register(): void {
    if (this.authService.register(this.username, this.password)) {
      this.router.navigate(['/login']);
    } else {
      alert('Registration failed');
    }
  }
}
