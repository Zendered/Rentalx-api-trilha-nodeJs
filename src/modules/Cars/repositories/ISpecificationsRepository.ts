import { Specification } from "../model/Specification";

export interface ICreatreSpecificationDTO {
    name: string;
    description: string;
}

export interface ISpecificationsRepository {
    create({ name, description }: ICreatreSpecificationDTO): void;
    findByName(name: string): Specification;
}