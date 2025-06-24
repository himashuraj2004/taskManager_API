const mongoose = require('mongoose');
const request = require('supertest');
const app = require('../../app');

jest.setTimeout(50000); // ✅ Extend timeout

beforeAll(async () => {
    await mongoose.connect('mongodb://localhost:27017/taskmanager_test', {
        useNewUrlParser: true,
        useUnifiedTopology: true
    });
});

afterAll(async () => {
    await mongoose.connection.dropDatabase();
    await mongoose.connection.close();
});

describe('API Test: Task Endpoints', () => {
    it('POST /tasks should return 201', async () => {
        const response = await request(app)
            .post('/tasks')
            .send({ title: 'API Test Task' })
            .expect(201);

        expect(response.body.title).toBe('API Test Task');
    });

    it('GET /tasks should return list of tasks', async () => {
        const response = await request(app)
            .get('/tasks')
            .expect(200);

        expect(Array.isArray(response.body)).toBe(true);
    });
});
