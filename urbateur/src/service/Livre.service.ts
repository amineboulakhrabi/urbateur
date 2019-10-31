import {getRepository} from "typeorm";
import {NextFunction, Request, Response} from "express";
import {Livre} from "../entity/Livre";

export class LivreController {

    private livreRepository = getRepository(Livre);

    async all(request: Request, response: Response, next: NextFunction) {
        return this.livreRepository.find();
    }

    async getById(id:string | number) {
        return await this.livreRepository.findOne(id);
    }

    async insert(T:Livre) {
        return await this.livreRepository.save(T);
    }

    async remove(request: Request, response: Response, next: NextFunction) {
        let livreToRemove = await this.livreRepository.findOne(request.params.id);
        await this.livreRepository.remove(livreToRemove);
    }

}