import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  selected_role: string = '';
  error_msg: string = '';

  constructor(private router: Router) {}

  login() 
  {
    if (!this.selected_role) 
      {
      this.error_msg = 'Please select a role to login.';
      return;
    }

    this.router.navigate([`/${this.selected_role}`]);     //routes/navigates to the selected user role
  }
}
