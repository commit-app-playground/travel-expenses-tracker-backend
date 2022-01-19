import Trip from "../entities/Trip";

export const TRIP_REPOSITORY = 'TRIP_REPOSITORY';

export interface TripRepository {
  getAll(): Promise<Trip[]>
  get(id: number): Promise<Trip>
  save(trip: Trip): Promise<void>
}