const { createTask } = require('../../controllers/taskController');
const Task = require('../../models/Task');

jest.mock('../../models/Task'); // Mock DB

describe('Unit Test: createTask', () => {
    it('should create a task successfully', async () => {
        const req = { body: { title: 'Test Task' } };
        const res = { status: jest.fn().mockReturnThis(), json: jest.fn() };

        Task.create.mockResolvedValue({ id: 1, title: 'Test Task' });

        await createTask(req, res);

        expect(Task.create).toHaveBeenCalledWith({ title: 'Test Task' });
        expect(res.status).toHaveBeenCalledWith(201);
        expect(res.json).toHaveBeenCalledWith({ id: 1, title: 'Test Task' });
    });
});
