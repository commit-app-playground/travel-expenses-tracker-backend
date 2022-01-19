
import { TripRepository } from "../../domain/repository/TripRepository";
import TripOutput from './TripOutput';

export class GetTrip {
  tripReposirory: TripRepository;

  constructor(tripRepository: TripRepository) {
    this.tripReposirory = tripRepository;
  }

  async execute(tripId: number): Promise<TripOutput> {
    const trip = await this.tripReposirory.get(tripId);
    const tripCost = trip.expenses;
    const output = new TripOutput(trip.id, trip.label, trip.startDate.toDateString(), trip.endDate.toDateString(), 1000);

    return output;
  }
}