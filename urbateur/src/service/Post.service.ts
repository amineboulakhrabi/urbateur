import {getRepository} from "typeorm";
import {NextFunction, Request, Response} from "express";
import {Post} from "../entity/Post";

export class PostController {

    private postRepository = getRepository(Post);

    async all(request: Request, response: Response, next: NextFunction) {
        return this.postRepository.find();
    }

    async getById(id:string | number) {
        return await this.postRepository.findOne(id);
    }

    async insert(T:Post) {
        return await this.postRepository.save(T);
    }
    async remove(request: Request, response: Response, next: NextFunction) {
        let postToRemove = await this.postRepository.findOne(request.params.id);
        await this.postRepository.remove(postToRemove);
    }

}