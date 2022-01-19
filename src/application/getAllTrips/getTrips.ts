
import { TripRepository } from "../../domain/repository/TripRepository";
import AllTripsOutput from "./AllTripsOutput";
import TripOutput from './TripOutput';

export class GetTrips {
  tripReposirory: TripRepository;

  constructor(tripRepository: TripRepository) {
    this.tripReposirory = tripRepository;
  }

  async execute(): Promise<AllTripsOutput> {
    const trips = await this.tripReposirory.getAll();
    const output = {
      numberOfTrips: trips.length,
      trips: trips.map(trip => (new TripOutput(trip.id, trip.label, trip.startDate.toDateString(), trip.endDate.toDateString(), 1000)))
    };

    return output;
  }
}