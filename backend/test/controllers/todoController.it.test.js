import request from 'supertest'
import app from '../../src/app'

process.env.PRIVATE_KEY_VALUE = 'secretKey'
const tokenUserID45 = 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjQ1fQ.2UWxX4tkLmwLzeacUf-a0HGexOTxg2gWOmgpLpinqDs'
const expectedResponse = [{
    id: '240',
    title: 'task3',
    description: 'task description',
    isDone: '0',
    userId: '45',
    createdDate: '2021-05-11',
    dueDate: '2021-05-29'
}]

describe('todo end to end tests', () => {
    it('should return 401 if no token is given', done => {
        request(app)
            .get('/todos/getAll')
            .expect('Content-Type', /json/)
            .end((err, data) => {
                expect(data.status).toBe(401)
                return done()
            })
    })
    it('should return 200 with todos if token is given', done => {
        request(app)
            .get('/todos/getAll')
            .set('Authorization', tokenUserID45)
            .end((err, data) => {
                expect(data.status).toBe(200)
                expect(expectedResponse).toEqual(data.body)
                return done()
            })
    })
})
