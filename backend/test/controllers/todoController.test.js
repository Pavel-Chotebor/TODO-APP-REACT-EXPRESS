import app from '../../src/app'
import request from 'supertest'
jest.mock('../../src/services/todoService');
import { todoService } from '../../src/services';
jest.mock('../../src/middlewares/authenticationMiddleware');
import { verifyAccesToken } from '../../src/middlewares/authenticationMiddleware'

const mockResponse = [{ title: 'task', description: 'description', userId: 1, isDone: false }]
const todo = { title: 'new', description: 'new', userId: 1 }
const editedTodo = { ...todo, title: 'edited title', description: 'edited description' }
const user = { userId: 1 }

const mockTodos = todoService.getAllTodos.mockImplementation(() =>
    mockResponse
)
const mockedNewTodo = todoService.addNewTodo.mockImplementation(() =>
    [...mockResponse, todo]
)
const mockedEditedTodo = todoService.editTodo.mockImplementation(() =>
    editedTodo
)
const mockedDoneTodo = todoService.setTodoDone.mockImplementation(() =>
    ({ ...editedTodo, isDone: true })
)
const mockDeleteTodo = todoService.deleteTodoById.mockImplementation(() =>
    []
)
const mockAuthMiddleware = verifyAccesToken.mockImplementation((req, res, next) => {
    req.authToken = user
    next()
});

describe('todo controller integration test', () => {
    it('should return 200 and todos if userId is given', done => {
        request(app)
            .get('/todos/getAll')
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .end((err, data) => {
                if (err) return done(err)
                expect(data.status).toBe(200)
                expect(mockResponse).toEqual(data.body)
                expect(mockTodos).toHaveBeenCalled()
                expect(mockAuthMiddleware).toHaveBeenCalled()
                return done()
            })
    })
    it('should return 201 and create new todo if todo object and userId is given', done => {
        request(app)
            .post('/todos/add')
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .end((err, data) => {
                if (err) return done(err)
                expect(data.status).toBe(201)
                expect([...mockResponse, todo]).toEqual(data.body)
                expect(mockedNewTodo).toHaveBeenCalled()
                expect(mockAuthMiddleware).toHaveBeenCalled()
                return done()
            })
    })
    it('should return 200 and edited todo', done => {
        request(app)
            .put('/todos/edit')
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .end((err, data) => {
                if (err) return done(err)
                expect(data.status).toBe(200)
                expect(editedTodo).toEqual(data.body)
                expect(mockedEditedTodo).toHaveBeenCalled()
                expect(mockAuthMiddleware).toHaveBeenCalled()
                return done()
            })
    })
    it('should return 200 and return todo with isDone true', done => {
        request(app)
            .put('/todos/setTodoDone')
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .end((err, data) => {
                if (err) return done(err)
                expect(data.status).toBe(200)
                expect({ ...editedTodo, isDone: true }).toEqual(data.body)
                expect(mockedDoneTodo).toHaveBeenCalled()
                expect(mockAuthMiddleware).toHaveBeenCalled()
                return done()
            })
    })
    it('should return 200 and return todo with isDone true', done => {
        request(app)
            .delete('/todos/delete')
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .end((err, data) => {
                if (err) return done(err)
                expect(data.status).toBe(200)
                expect([]).toEqual(data.body)
                expect(mockDeleteTodo).toHaveBeenCalled()
                expect(mockAuthMiddleware).toHaveBeenCalled()
                return done()
            })
    })
})
