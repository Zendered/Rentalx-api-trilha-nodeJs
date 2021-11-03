import { Router } from "express";
import multer from 'multer'
import { createCategoryController } from "../modules/Cars/useCases/createCategory";
import { importCategoryController } from "../modules/Cars/useCases/importCategory";
import { listCategoriesController } from "../modules/Cars/useCases/listCategories";

export const cateriesRoutes = Router()
const upload = multer({
    dest: './tmp',
})

cateriesRoutes.post('/', (req, res) => {
    return createCategoryController.handle(req, res)
})

cateriesRoutes.get('/', (req, res) => {
    return listCategoriesController.handle(req, res)
})

cateriesRoutes.post('/import', upload.single('file'), (req, res) => {
    return importCategoryController.handle(req, res)
})