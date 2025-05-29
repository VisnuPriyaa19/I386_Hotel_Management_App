import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Room } from '../../../models/room.model';
import { RoomService } from '../../../services/room/room.service';
import { CustomerService } from '../../../services/customer/customer.service';

@Component({
  selector: 'app-room-booking',
  imports: [CommonModule],
  templateUrl: './room-booking.component.html',
  styleUrl: './room-booking.component.css'
})
export class RoomBookingComponent {
  availableRooms: Room[] = [];

  constructor(private roomService: RoomService, private customerService: CustomerService) {}

  ngOnInit() 
  {
    this.availableRooms = this.roomService.getAvailableRooms();
  }

  bookRoom(roomNo: number) 
  {
    const name = prompt('Enter your name:');
    const mobile = prompt('Enter your mobile number:');
    const address = prompt('Enter your address:');
    const dateInput = prompt('Enter check-in date (YYYY-MM-DD):');
    
    if (name && mobile && address && dateInput) 
    {
      const check_in_date = new Date(dateInput);
      this.customerService.addCustomer({ name, mobile, address, roomNo, check_in_date });

      this.roomService.updateRoomStatus(roomNo, 'Occupied');

      alert('Room booked successfully!');
      this.availableRooms = this.roomService.getAvailableRooms(); // refresh table
    } 
    else 
    {
      alert('All fields are required!');
    }
  }
}
