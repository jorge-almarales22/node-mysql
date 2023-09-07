import {Router} from 'express'
import { userDelete, userGet, userPost, userSendEmail } from '../controllers/users.controller.js'

export const usersRoutes = Router()

usersRoutes.get('/', userGet)
usersRoutes.post('/', userPost)
usersRoutes.delete('/:id', userDelete)

usersRoutes.post('/email', userSendEmail)