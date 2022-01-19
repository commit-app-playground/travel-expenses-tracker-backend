import { Inject, Injectable } from '@nestjs/common';
import Trip from '../../../domain/entities/Trip';
import TripOutput from '../../../application/getAllTrips/TripOutput';
import AllTripsOutput from '../../../application/getAllTrips/AllTripsOutput';
import { TRIP_REPOSITORY, TripRepository } from '../../../domain/repository/TripRepository'
import { GetTrips } from '../../../application/getAllTrips/getTrips';
import { GetTrip } from '../../../application/getAllTrips/getTrip';

@Injectable()
export class TripsService {
  trips: Trip[];
  
  constructor(@Inject(TRIP_REPOSITORY) private readonly tripRepository: TripRepository) {}

  async getAllTrips(): Promise<AllTripsOutput> {
    const getTrips = new GetTrips(this.tripRepository);
    const output = await getTrips.execute();
    
    return output;
  }

  async getTrip(id: number): Promise<TripOutput> {
    const getTrip = new GetTrip(this.tripRepository);
    const trip = await getTrip.execute(id);

    return trip;
  }
}
