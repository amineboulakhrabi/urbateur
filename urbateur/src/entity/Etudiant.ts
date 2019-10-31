import { Column,  ChildEntity } from "typeorm";
import {Personne} from "./Personne";
@ChildEntity()
export class Etudiant extends Personne{
    @Column()
    cv:String;
    @Column()
    lettre:String;
    
}