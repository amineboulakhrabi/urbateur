import { Entity,  Column, TableInheritance, BaseEntity, PrimaryColumn } from "typeorm";

@Entity()
export class Post extends BaseEntity{
    @PrimaryColumn()
    id:String;
    @Column()
    type:String;
    @Column()
    nom:String;
    

}

