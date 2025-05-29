import { Injectable } from '@angular/core';
import { Room } from '../../models/room.model';

@Injectable({
  providedIn: 'root'
})
export class RoomService {
  private roomDetails: Room[] = [
    { roomNo: 101, type: 'Deluxe', price: 2000, status: 'Occupied' },
    { roomNo: 102, type: 'Suite', price: 3500, status: 'Available' },
    { roomNo: 103, type: 'Standard', price: 1500, status: 'Occupied' },
    { roomNo: 104, type: 'Standard', price: 1500, status: 'Available' },
    { roomNo: 105, type: 'Suite', price: 3500, status: 'Available' }
  ];

  getRoomByNumber(search_roomNo: number): Room | undefined              //to display room details
  {
    return this.roomDetails.find(room => room.roomNo === search_roomNo);
  }

  getAllRooms(): Room[]         //to filter and display all rooms for receptionist and customer
  {
    return this.roomDetails;    //returns an array
  }
  
  getAvailableRooms(): Room[] 
  {
    return this.roomDetails.filter(room => room.status === 'Available');    //for customer's child component
  }

  updateRoomStatus(roomNo: number, newStatus: string): void 
  {
    const room = this.getRoomByNumber(roomNo);
    if (room) 
    {
      room.status = newStatus;
    }
  }
}
