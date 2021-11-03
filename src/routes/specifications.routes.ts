import { Router } from "express";
import { createSpecificationController } from "../modules/Cars/useCases/createSpecification";

export const specificationRoutes = Router()


specificationRoutes.post('/', (req, res) => {
    return createSpecificationController.handle(req, res)
})