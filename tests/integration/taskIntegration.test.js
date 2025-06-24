const mongoose = require('mongoose');
const request = require('supertest');
const app = require('../../app');

jest.setTimeout(30000); // ✅ Extend timeout

beforeAll(async () => {
    await mongoose.connect('mongodb://localhost:27017/taskmanager_test', {
        useNewUrlParser: true,
        useUnifiedTopology: true
    });
});

afterAll(async () => {
    await mongoose.connection.dropDatabase(); // Optional: Clean DB
    await mongoose.connection.close(); // ✅ Close DB to prevent hanging
});

describe('Integration Test: Create Task', () => {
    it('should create and fetch the task', async () => {
        const createResponse = await request(app)
            .post('/tasks')
            .send({ title: 'Integration Task' })
            .expect(201);

        const getResponse = await request(app)
            .get('/tasks')
            .expect(200);

        expect(getResponse.body.some(task => task.title === 'Integration Task')).toBe(true);
    });
});
