import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StaffService } from '../../../services/staff/staff.service';
import { Staff } from '../../../models/staff.model';

@Component({
  selector: 'app-staff-management',
  imports: [CommonModule],
  templateUrl: './staff-management.component.html',
  styleUrl: './staff-management.component.css'
})
export class StaffManagementComponent implements OnInit {
  staffList: Staff[] = [];                            //staffList is of type Staff[](mentioned in Staff model)

  constructor(private staffService: StaffService) {}

  ngOnInit()                                          //as soon as the component is initialized, the entire staffList is shown as a table
  {
    this.staffList = this.staffService.getStaff();
  }

  addStaff() 
  {
    const idStr = prompt('Enter Staff ID:');
    if (!idStr) return;
    const id = +idStr;                                // convert to number

    const name = prompt('Enter Staff Name:');
    if (!name) return;                                //cancel operation for invalid input

    const role = prompt('Enter Role:');
    if (!role) return;

    const shift = prompt('Enter Shift:');
    if (!shift) return;

    const rm = prompt('Enter Reporting Manager:');
    if (!rm) return;

    const newStaff: Staff = { id, name, role, shift, rm };

    this.staffService.addStaff(newStaff);
    this.staffList = this.staffService.getStaff();
  }


  deleteStaff(id: number) 
  {
    const confirmed = confirm("Are you sure you want to delete the selected staff?");
    if (confirmed) 
    {
      this.staffService.deleteStaff(id);
      this.staffList = this.staffService.getStaff();
    }
  }

}
