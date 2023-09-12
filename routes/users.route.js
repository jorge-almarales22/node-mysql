import {Router} from 'express'
import { getImage, userDelete, userGet, userPost, userSendEmail } from '../controllers/users.controller.js'

export const usersRoutes = Router()

usersRoutes.get('/:id', userGet)
usersRoutes.post('/', userPost)
usersRoutes.delete('/:id', userDelete)

usersRoutes.post('/email', userSendEmail)

usersRoutes.post('/file', getImage)