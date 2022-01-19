import { GetTrips } from "../../src/application/getAllTrips/getTrips"
import TripRepositoryMemory from '../../src/infra/repository/memory/TripRepositoryMemory';
import TripOutput from '../../src/application/getAllTrips/TripOutput';

describe('Get Trips tests', () => {
  test('Should return all trips', async () => {
    const getTrips = new GetTrips(new TripRepositoryMemory());
    const allTripsOutput = await getTrips.execute();
    // list trip start/end date, number of days, total amount spent
    expect(allTripsOutput.numberOfTrips).toBe(1);
    const tripOutput = new TripOutput(1, 'My trip', 'Tue Oct 12 2021', 'Fri Oct 15 2021', 1000)
    expect(allTripsOutput.trips[0]).toEqual(tripOutput);
  })
})