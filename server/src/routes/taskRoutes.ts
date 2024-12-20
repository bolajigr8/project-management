import { Router } from 'express'
import {
  createTask,
  getTasks,
  getUserTasks,
  updateTaskStatus,
} from '../controllers/taskController'

const router = Router()

router.get('/', getTasks)
router.post('/', createTask)
// to update status in the task, and we customizing our query params
router.patch('/:taskId/status', updateTaskStatus)
router.get('/user/:userId', getUserTasks)

export default router
