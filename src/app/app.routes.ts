import { Routes } from '@angular/router';

import { LoginComponent } from './components/login/login.component';

import { ManagerComponent } from './components/manager/manager.component';
import { StaffManagementComponent } from './components/manager/staff-management/staff-management.component';
import { CustomerRecordsComponent } from './components/manager/customer-records/customer-records.component';

import { ReceptionistComponent } from './components/receptionist/receptionist.component';
import { BookingInfoComponent } from './components/receptionist/booking-info/booking-info.component';

import { CustomerComponent } from './components/customer/customer.component';
import { RoomBookingComponent } from './components/customer/room-booking/room-booking.component';

export const routes: Routes = [
    { path: '', component: LoginComponent },  // default route
    
    { path: 'manager', component: ManagerComponent,
      children: [
        { path: 'staff', component: StaffManagementComponent },
        { path: 'customer', component: CustomerRecordsComponent }
    ]},

    { path: 'receptionist', component: ReceptionistComponent,
      children: [
        { path: 'booking', component: BookingInfoComponent}
    ]},

    { path: 'customer', component: CustomerComponent,
      children: [
        { path: 'room-booking', component: RoomBookingComponent}
    ]}
];
