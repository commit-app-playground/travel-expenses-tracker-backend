import request from 'supertest';
import { Test } from '@nestjs/testing';
import { AppModule } from '../../src/infra/http/app.module';
import { INestApplication } from '@nestjs/common';

describe('TripController (e2e)', () => {

  let app: INestApplication;
  
  beforeAll(async () => {
    const moduleFixture = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('return all trips (GET)', () => {
    return request(app.getHttpServer())
      .get('/trips')
      .expect(200)
      .expect({"numberOfTrips":1,"trips":[{id:1, "label":"My trip","startDate":"Tue Oct 12 2021","endDate":"Fri Oct 15 2021","total":1000}]});
  });

  it('returns a specific trip (GET)', () => {
    return request(app.getHttpServer())
      .get('/trips/1')
      .expect(200)
      .expect({"id":1,"startDate":"Tue Oct 12 2021","endDate":"Fri Oct 15 2021","label":"My trip", total: 1000});
  });
});
