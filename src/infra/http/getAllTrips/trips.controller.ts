import { Controller, Get, Param } from '@nestjs/common';
import { TripsService } from './trips.service';
import AllTripsOutput from '../../../application/getAllTrips/AllTripsOutput';
import TripOutput from '../../../application/getAllTrips/TripOutput';

@Controller('trips')
export class TripsController {
  constructor(private readonly tripService: TripsService) {}

  @Get()
  getAllTrips(): Promise<AllTripsOutput> {
    return this.tripService.getAllTrips();
  }

  @Get(':id')
  async getTrip(@Param() params): Promise<TripOutput> {
    return await this.tripService.getTrip(params.id);
  }
}
