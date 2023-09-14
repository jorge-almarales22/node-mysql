import express from 'express'
import 'dotenv/config'
import cors from 'cors'
import { usersRoutes } from '../routes/users.route.js'
import { authRoutes } from '../routes/auth.routes.js'

export default class Server{

    constructor(){

        //Config app
        this.app = express()
        this.port = process.env.PORT
        this.usersPath = '/api/users'
        this.authPath = '/api/auth'

        //Middlewares
        this.middlewares()

        //Routes
        this.routes()
    }

    middlewares(){

        //Cors
        this.app.use(cors())

        //Dar acceso a nuestra carpeta publica
        this.app.use(express.static('public'))

        //Lectura y parseo del bodya JSON
        this.app.use( express.json() )

    }

    routes(){

        this.app.use(this.usersPath, usersRoutes)
        this.app.use(this.authPath, authRoutes)

        this.app.use((req, res, next) => {
            return res.status(404).json({
                msg: 'Route not found'
            })
        })
    }

    listen(){
        this.app.listen(this.port, () => {
            console.log('Server on port', this.port)
        })
    }
}