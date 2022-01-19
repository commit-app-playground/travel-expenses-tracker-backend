import { Module } from '@nestjs/common';
import { TripsController } from './getAllTrips/trips.controller';
import { TripsService } from './getAllTrips/trips.service';
import { TRIP_REPOSITORY} from '../../domain/repository/TripRepository'
import TripRepositoryMemory from '../repository/memory/TripRepositoryMemory';
@Module({
  imports: [],
  controllers: [TripsController],
  providers: [TripsService, {useClass: TripRepositoryMemory, provide: TRIP_REPOSITORY}]
})

export class AppModule {}
