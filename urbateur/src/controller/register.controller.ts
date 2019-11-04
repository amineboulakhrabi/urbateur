import {NextFunction,Request,Response,Router} from "express";
import { Architect } from "../entity/Architect";
import { ArchitectService } from "../service/Architect.service";
import { getManager } from "typeorm";
import { body } from "express-validator/check";


const registerRouter : Router = Router();

registerRouter
.route("/signup")
.post(
    [
      body("data")
    ],
    async (req: Request, res: Response, next: NextFunction) => {
        const architectService= new ArchitectService();
        try{
            let archi = new Architect();
            archi.email=req.body.data.email;
            archi.address='';
            archi.prenom='';
            archi.image='';
            archi.isnew=true;
            archi.nom='';
            archi.pays='';
            archi.tel='';
            archi.ville='';

            const archiRepository = getManager().getRepository(Architect);
            archi = archiRepository.create(archi);
            archi = await architectService.insert(archi);
            

        }catch (error) {
           
          }
    }
)