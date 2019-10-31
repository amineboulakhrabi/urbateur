import { ChildEntity} from 'typeorm';
import {Personne} from "./Personne";

@ChildEntity()
export class Architect extends Personne {
    
}
