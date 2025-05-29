import { Injectable } from '@angular/core';
import { Staff } from '../../models/staff.model';

@Injectable({
  providedIn: 'root'
})

export class StaffService {
  private staffList: Staff[] = [
    { id: 1, name: 'Jeevan', role: 'Receptionist', shift: 'Morning', rm: 'John' },
    { id: 2, name: 'Monika', role: 'Housekeeper', shift: 'Evening', rm: 'Arun' },
    { id: 3, name: 'Rithika', role: 'Security', shift: 'Night', rm: 'Rohith' },
    { id: 4, name: 'Harish', role: 'Housekeeper', shift: 'Night', rm: 'Arun' },
    { id: 5, name: 'Sathish', role: 'Security', shift: 'Morning', rm: 'Rohith' },
  ];

  getStaff(): Staff[] 
  {
    return this.staffList;            //returns an array(entire staffList)
  }

  addStaff(newStaff: Staff): void     //type of newStaff - Staff(defined in model)
  {                                   //type of func - void
    this.staffList.push(newStaff);
  }

  deleteStaff(id: number): void 
  {
    this.staffList = this.staffList.filter(s => s.id !== id);     //s- parameter in filter() func that representes each object in StaffList
  }
}
