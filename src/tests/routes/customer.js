const request = require('supertest');
const app = require('../app'); // Assuming the Express app is defined in a separate file

describe('Test the customer-related routes', () => {
  test('GET /api/private/customers should return a 200 status code and a message', async () => {
    const response = await request(app).get('/api/private/customers');
    expect(response.status).toBe(200);
    expect(response.body.message).toBe("Hello from a public endpoint! You don't need to be authenticated to see this.");
  });

  test('GET /api/private/customers/:customerId/orders should return a 200 status code and a message', async () => {
    const response = await request(app).get('/api/private/customers/123/orders');
    expect(response.status).toBe(200);
    expect(response.body.message).toBe("Hello from a public endpoint! You don't need to be authenticated to see this.");
  });

  test('GET /api/private/customers/orders/:orderId/products should return a 200 status code and a message', async () => {
    const response = await request(app).get('/api/private/customers/orders/456/products');
    expect(response.status).toBe(200);
    expect(response.body.message).toBe("Hello from a public endpoint! You don't need to be authenticated to see this.");
  });
});
