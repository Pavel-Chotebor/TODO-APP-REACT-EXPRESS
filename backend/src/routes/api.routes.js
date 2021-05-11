import express from 'express';
const cors = require('cors');
import { verifyAccesToken } from '../middlewares/authenticationMiddleware'
import {
  loginController,
  registerController,
  todoController,
}
  from '../controllers';

const router = express.Router();
router.use(cors());
router.use(express.json());

router.post('/register', registerController.register)
router.post('/login', loginController.login)

router.use(verifyAccesToken)  
router.get('/todos/getAll', todoController.getAllTodos)
router.get('/todos/getTodo', todoController.getTodo)
router.post('/todos/add', todoController.addNewTodo)
router.put('/todos/edit', todoController.editTodo)
router.put('/todos/setTodoDone', todoController.setTodoDone)
router.delete('/todos/delete', todoController.deleteTodo)

export default router;
