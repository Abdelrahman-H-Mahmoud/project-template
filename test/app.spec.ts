import request from 'supertest';
import app from '../src/app';

describe('GET /healthcheck', () => {
    it('responds with status UP', async () => {
    const response = await request(app).get('/healthcheck');
    expect(response.status).toBe(200);
    expect(response.body).toMatchObject({ "status": "UP" });
  });
});