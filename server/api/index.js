import { Router } from 'express'

import user from './testData'

var router = Router()

// Add USERS Routes
router.use(user)

export default router
