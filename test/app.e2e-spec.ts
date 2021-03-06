import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from './../src/app.module';

describe('AppController (e2e)', () => {
  let app: INestApplication;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('/ (GET)', () => {
    return request(app.getHttpServer())
      .get('/')
      .expect(200)
      .expect('Hello World!');
  });

  describe('movies', () => {
    it('GET', () => {
      return request(app.getHttpServer())
        .get('/movies')
        .expect(200)
        .expect('Hello World!');
    });

    it('POST', () => {
      return request(app.getHttpServer())
        .post('/movies')
        .send({
          id: 1,
        })
        .expect(200)
        .expect(true);
    });

    it('DELETE', () => {
      return request(app.getHttpServer())
        .delete('/movies')
        .send({
          id: 1,
        })
        .expect(200)
        .expect(true);
    });

    it('PATCH', () => {
      return request(app.getHttpServer())
        .delete('/movies')
        .send({
          id: 1,
          title: 'Hello',
        })
        .expect(200)
        .expect(true);
    });
  });
});
