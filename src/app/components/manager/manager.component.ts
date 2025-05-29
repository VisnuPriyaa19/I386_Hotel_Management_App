import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-manager',
  imports: [CommonModule, RouterOutlet, RouterModule],
  templateUrl: './manager.component.html',
  styleUrl: './manager.component.css'
})
export class ManagerComponent {
  title = 'Manager Dashboard'
  selectedView: string = '';        //to set view between two child components --> staff-management, customer-records

  setView(view: string) 
  {
    this.selectedView = view;
  }
}
