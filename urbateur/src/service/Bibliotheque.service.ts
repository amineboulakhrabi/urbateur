import {getRepository} from "typeorm";
import {NextFunction, Request, Response} from "express";
import {Bibliotheque} from "../entity/Bibliotheque";

export class BibliothequeController {

    private bibliothequeRepository = getRepository(Bibliotheque);

    async all(request: Request, response: Response, next: NextFunction) {
        return this.bibliothequeRepository.find();
    }

    async getById(id:string | number) {
        return await this.bibliothequeRepository.findOne(id);
    }

    async insert(T:Bibliotheque) {
        return await this.bibliothequeRepository.save(T);
    }
    async remove(request: Request, response: Response, next: NextFunction) {
        let bibliothequeToRemove = await this.bibliothequeRepository.findOne(request.params.id);
        await this.bibliothequeRepository.remove(bibliothequeToRemove);
    }

}