import {getRepository} from "typeorm";
import {NextFunction, Request, Response} from "express";
import {Post} from "../entity/Post";

export class PostService {

    private static postRepository = getRepository(Post);

    static async all(request: Request, response: Response, next: NextFunction) {
        return this.postRepository.find();
    }

    static async getById(id:string | number) {
        return await this.postRepository.findOne(id);
    }

    static async  insert(T:Post) {
        const newUser = this.postRepository.create(T);
        return await this.postRepository.save(newUser);
    }
    static async remove(request: Request, response: Response, next: NextFunction) {
        let postToRemove = await this.postRepository.findOne(request.params.id);
        await this.postRepository.remove(postToRemove);
    }

}