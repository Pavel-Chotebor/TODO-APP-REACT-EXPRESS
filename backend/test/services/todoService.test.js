import { todoService } from '../../src/services';
jest.mock('../../src/models/Todo')
import { Todo } from '../../src/models/Todo'

const mockUser = { userId: 1 }
const mockTodos = { id: 1, title: 'task1', descripion: 'test', isDone: false, userId: 1 }

Todo.getAllTodos.mockImplementation(
  () => mockTodos
)

describe('todoService', () => {
  describe('getAllTodos', () => {
    it('should return list of todos when user have any', async () => {
      try {
        const todos = await todoService.getAllTodos({})
        expect(todos).toEqual(mockTodos)
      } catch (err) {
        console.log(err)
      }
    })
  })
})
