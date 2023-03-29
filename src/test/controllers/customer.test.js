const bd = require('../../main/storage/bd');
const { getCustomers } = require('../../main/controller/customer');

describe('getCustomers', () => {
  test('should return all customers', () => {
    const mockRows = [
      { id: 1, name: 'John Doe' },
      { id: 2, name: 'Jane Doe' },
    ];
    bd.query = jest.fn().mockImplementation((query, callback) => {
      callback(null, mockRows);
    });
    const mockRes = { send: jest.fn() };
    getCustomers(null, mockRes);
    expect(bd.query).toHaveBeenCalledWith('SELECT * FROM public."Client" ', expect.any(Function));
    expect(mockRes.send).toHaveBeenCalledWith(mockRows);
  });

  test('should handle error', () => {
    const mockError = new Error('Database error');
    bd.query = jest.fn().mockImplementation((query, callback) => {
      callback(mockError, null);
    });
    const mockRes = { status: jest.fn().mockReturnThis(), send: jest.fn() };
    getCustomers(null, mockRes);
    expect(bd.query).toHaveBeenCalledWith('SELECT * FROM public."Client" ', expect.any(Function));
    expect(mockRes.status).toHaveBeenCalledWith(500);
    expect(mockRes.send).toHaveBeenCalledWith('Erreur lors de la récupération de la liste de produits');
  });
});
