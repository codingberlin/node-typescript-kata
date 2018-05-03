import * as express from 'express'
import persons from './persons'

class App {
    public express

    constructor() {
        this.express = express()
        this.mountRoutes()
    }

    private mountRoutes(): void {
        const router = express.Router()
        router.get('/', (req, res) => {
            res.json(persons)
        })
        this.express.use('/', router)
    }
}

export default new App().express

