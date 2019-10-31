import { Entity, Column, TableInheritance, BaseEntity, PrimaryColumn } from "typeorm";

@Entity()
@TableInheritance()
export class Personne extends BaseEntity {
    @PrimaryColumn()
    id:String;
    @Column()
    nom:String;
    @Column()
    prenom:String;
    @Column()
    email:String;
    @Column()
    password:String;
    @Column()
    isnew:boolean
    @Column()
    tel:String;
    @Column()
    address:String;
    @Column()
    pays:String;
    @Column()
    ville:String;
    @Column()
    image:String;
    @Column()
    datebir:Date;
    @Column()
    role:String;
}

