import {getRepository} from "typeorm";
import {NextFunction, Request, Response} from "express";
import {Etudiant} from "../entity/Etudiant";

export class EtudiantController {

    private etudiantRepository = getRepository(Etudiant);

    async all(request: Request, response: Response, next: NextFunction) {
        return this.etudiantRepository.find();
    }

    async getById(id:string | number) {
        return await this.etudiantRepository.findOne(id);
    }

    async insert(T:Etudiant) {
        return await this.etudiantRepository.save(T);
    }
    async remove(request: Request, response: Response, next: NextFunction) {
        let etudiantToRemove = await this.etudiantRepository.findOne(request.params.id);
        await this.etudiantRepository.remove(etudiantToRemove);
    }

}