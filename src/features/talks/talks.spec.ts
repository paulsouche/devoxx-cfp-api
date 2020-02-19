// tslint:disable: no-implicit-dependencies
import { INestApplication } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import request from 'supertest';
import TalksModule from './talks.module';

describe(`TalksController (e2e)`, () => {
  const BASE_URL = `/api/talks`;
  let app: INestApplication;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [TalksModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  describe(`/talks (GET)`, () => {
    it(`Should return a list of talks`, () => {
      return request(app.getHttpServer())
        .get(`${BASE_URL}`)
        .expect(200)
        .expect([]);
    });
  });
});
