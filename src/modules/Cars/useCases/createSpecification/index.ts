import { SpecificationsRepository } from "../../repositories/implementations/SpecificationsRepository";
import { CreateSpecificationsController } from "./CreateSpecificationsController";
import { CreateSpecificationUseCase } from "./CreateSpecificationUseCase";

const specificationsRepository = null;
const createSpecificationUseCase = new CreateSpecificationUseCase(
    specificationsRepository
);
export const createSpecificationController = new CreateSpecificationsController(
    createSpecificationUseCase
);
