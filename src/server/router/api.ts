import { Router } from 'express'
import { search } from '../controllers/api/music'

const router = Router()
router.get('/music/:query/:category', search)
router.get('/music/:query', search)

export default router
