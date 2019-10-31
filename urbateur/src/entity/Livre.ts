import { Entity,  Column, ManyToOne, PrimaryColumn } from "typeorm";
import { type } from "os";
import {Bibliotheque} from "./Bibliotheque";

@Entity()
export class Livre{
    @PrimaryColumn()
    id:String;
    @Column()
    auteur:String;
    @Column()
    titre:String;
    @Column()
    edition:String;
    @Column()
    link:String;
    @ManyToOne(type => Bibliotheque,bibliotheque => bibliotheque)
    bibliotheque: Bibliotheque;
    
}



