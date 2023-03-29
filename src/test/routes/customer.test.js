const request = require('supertest');
const app = require('../../main/controllers/customer');

describe('Test the customer-related routes', () => {
  test('GET /api/v1/customer/ should return a 200 status code and a message', async () => {
    const response = await request(app).get('/api/v1/customer/:2');
    expect(response.status).toBe(200);
    expect(response.body.message).toBe("Hello from a public endpoint! You don't need to be authenticated to see this.");
  });

  test('GET //api/v1/customer/:id/orders should return a 200 status code and a message', async () => {
    const response = await request(app).get('/api/v1/customer/2/orders');
    expect(response.status).toBe(200);
    expect(response.body.message).toBe("Hello from a public endpoint! You don't need to be authenticated to see this.");
  });

  test('GET /api/v1/customer/:id/orders/products should return a 200 status code and a message', async () => {
    const response = await request(app).get('/api/v1/customer/2/orders/products');
    expect(response.status).toBe(200);
    expect(response.body.message).toBe("Hello from a public endpoint! You don't need to be authenticated to see this.");
  });
});
