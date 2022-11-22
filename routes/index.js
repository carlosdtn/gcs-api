import { Router } from 'express'
import userRouter from './users.router.js'
import parcelRouter from './parcels.router.js'

const router = Router()

router.use('/users', userRouter)
router.use('/parcels', parcelRouter)

export default router
