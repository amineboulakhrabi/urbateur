import {getRepository} from "typeorm";
import {NextFunction, Request, Response} from "express";
import {Artisan} from "../entity/Artisan";

export class ArtisanController {

    private artisanRepository = getRepository(Artisan);

    async all(request: Request, response: Response, next: NextFunction) {
        return this.artisanRepository.find();
    }

    async getById(id:string | number) {
        return await this.artisanRepository.findOne(id);
    }

    async insert(T:Artisan) {
        return await this.artisanRepository.save(T);
    }

   
    async remove(request: Request, response: Response, next: NextFunction) {
        let artisanToRemove = await this.artisanRepository.findOne(request.params.id);
        await this.artisanRepository.remove(artisanToRemove);
    }

}