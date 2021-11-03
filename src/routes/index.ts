import { Router } from "express";
export const router = Router()

import { cateriesRoutes } from '../routes/categories.routes'
router.use('/categories', cateriesRoutes)

import { specificationRoutes } from '../routes/specifications.routes'
router.use('/specifications', specificationRoutes)