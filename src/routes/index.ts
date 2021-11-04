import { Router } from "express";

import { cateriesRoutes } from "./categories.routes";
import { specificationRoutes } from "./specifications.routes";

export const router = Router();
router.use("/categories", cateriesRoutes);

router.use("/specifications", specificationRoutes);
