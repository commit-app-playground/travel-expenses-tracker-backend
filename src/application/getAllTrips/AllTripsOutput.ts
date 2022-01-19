import TripOutput from './TripOutput';

export default class AllTripsOutput {
  numberOfTrips: number;
  trips: TripOutput[];
  
  constructor(numberOfTrips: number, trips: TripOutput[]) {
    this.numberOfTrips = numberOfTrips;
    this.trips = trips;
  }
}