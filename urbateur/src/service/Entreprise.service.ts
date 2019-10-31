import {getRepository} from "typeorm";
import {NextFunction, Request, Response} from "express";
import {Entreprise} from "../entity/Entreprise";

export class EntrepriseController {

    private entrepriseRepository = getRepository(Entreprise);

    async all(request: Request, response: Response, next: NextFunction) {
        return this.entrepriseRepository.find();
    }
    async getById(id:string | number) {
        return await this.entrepriseRepository.findOne(id);
    }

    async insert(T:Entreprise) {
        return await this.entrepriseRepository.save(T);
    }
    async remove(request: Request, response: Response, next: NextFunction) {
        let entrepriseToRemove = await this.entrepriseRepository.findOne(request.params.id);
        await this.entrepriseRepository.remove(entrepriseToRemove);
    }

}