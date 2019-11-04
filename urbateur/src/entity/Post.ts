import { Entity,  Column,  BaseEntity, PrimaryColumn } from "typeorm";

@Entity()
export class Post extends BaseEntity{
    @PrimaryColumn()
    id:String;
    @Column()
    post:String;
    @Column()
    idPoster:String;
    @Column()
    nomPoster:String;
    @Column()
    time:Date;
    @Column()
    avatar:String;
    

}

