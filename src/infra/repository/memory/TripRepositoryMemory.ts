import { Injectable } from '@nestjs/common';
import Expense from '../../../domain/entities/Expense';
import Trip from '../../../domain/entities/Trip';
import { TripRepository } from '../../../domain/repository/TripRepository';

@Injectable()
export default class TripRepositoryMemory implements TripRepository {
  
  trips: Trip[];
  
  constructor() {
    const trip = new Trip(1, new Date("10/12/2021"), new Date("10/15/2021"), "My trip");
    trip.addExpense(new Expense(1, 100, new Date(), 'some expense', 1, 1));
    this.trips = [
      trip
    ]
  }

  async getAll(): Promise<Trip[]> {
    return this.trips;
  }
  async get(id: number): Promise<Trip> {
    return this.trips.find(trip => trip.id === Number(id));
  }
  save(trip: Trip): Promise<void> {
    throw new Error('Method not implemented.');
  }
  
}