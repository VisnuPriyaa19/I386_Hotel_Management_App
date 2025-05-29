import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Room } from '../../../models/room.model';
import { RoomService } from '../../../services/room/room.service';
import { Customer } from '../../../models/customer.model';
import { CustomerService } from '../../../services/customer/customer.service';

@Component({
  selector: 'app-booking-info',
  imports: [CommonModule],
  templateUrl: './booking-info.component.html',
  styleUrl: './booking-info.component.css'
})
export class BookingInfoComponent implements OnInit {
  occupiedRooms: any[] = [];                  //'any' type cuz it is taken from both customer and room services
  availableRooms: Room[] = [];

  constructor(
    private customerService: CustomerService,
    private roomService: RoomService
  ) {}

  ngOnInit(): void 
  {
    const customers: Customer[] = this.customerService.getCustomers();
    const allRooms: Room[] = this.roomService.getAllRooms();

  //Occupied rooms only 
  this.occupiedRooms = customers
    .map(customer => 
    {
      const room = this.roomService.getRoomByNumber(customer.roomNo);
      if (room?.status === 'Occupied') 
      {
        return {
          roomNo: customer.roomNo,
          status: room.status,
          name: customer.name,
          mobile: customer.mobile,
          address: customer.address,
          checkInDate: customer.check_in_date
        };
      }
      return null;
    })
    .filter(room => room !== null) as any[];

  // Available rooms
  this.availableRooms = this.roomService.getAvailableRooms();
}
}
