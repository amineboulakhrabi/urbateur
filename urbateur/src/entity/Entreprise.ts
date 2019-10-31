import { Column, ChildEntity} from 'typeorm';
import {Personne} from "./Personne";

@ChildEntity()
export class Entreprise extends Personne{
    @Column()
    ice:String;
    
}