import {getRepository} from "typeorm";
import {NextFunction, Request, Response} from "express";
import {Architect} from "../entity/Architect";

export class ArchitectService {

    private architectRepository = getRepository(Architect);

    async all(request: Request, response: Response, next: NextFunction) {
        return this.architectRepository.find();
    }

    async getById(id:string | number) {
        return await this.architectRepository.findOne(id);
    }

    async insert(T:Architect) {
        return await this.architectRepository.save(T);
    }

    async remove(request: Request, response: Response, next: NextFunction) {
        let architectToRemove = await this.architectRepository.findOne(request.params.id);
        await this.architectRepository.remove(architectToRemove);
    }

}