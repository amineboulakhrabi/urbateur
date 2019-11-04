import {Post} from '../entity/Post';
import {PostService} from '../service/Post.service';
import { getManager } from "typeorm";
import 'mocha';
async() =>{

    let  user = new Post();
    user.type="test";
    user.nom="test";
    try{
        const userRepository = getManager().getRepository(Post);
        user = userRepository.create(user);
        user = await PostService.insert(user);
        console.log("true");
    }finally{
        console.log("true");
    };
   
}
