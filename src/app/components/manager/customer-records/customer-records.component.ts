import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomerService } from '../../../services/customer/customer.service';
import { Customer } from '../../../models/customer.model';
import { RoomService } from '../../../services/room/room.service';
import { Room } from '../../../models/room.model';

@Component({
  selector: 'app-customer-records',
  imports: [CommonModule],
  templateUrl: './customer-records.component.html',
  styleUrl: './customer-records.component.css'
})
export class CustomerRecordsComponent implements OnInit {
  customers: Customer[] = [];
  selectedRoomDetails: Room | null = null;

  constructor(
    private customerService: CustomerService,
    private roomService: RoomService
  ) {}

  ngOnInit() 
  {
    this.customers = this.customerService.getCustomers();
  }

  viewRoomDetails(roomNo: number) 
  {
    const room = this.roomService.getRoomByNumber(roomNo);
    if (room) 
    {
      this.selectedRoomDetails = room;
    } 
    else 
    {
      this.selectedRoomDetails = null;
      alert('Room details not found.');
    }
  }
}
