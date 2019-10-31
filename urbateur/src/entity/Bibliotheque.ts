import { PrimaryGeneratedColumn,OneToMany, ChildEntity} from 'typeorm';
import{Livre} from'./Livre';
@ChildEntity()
export class Bibliotheque {
    @PrimaryGeneratedColumn()
    id:number; 
    @OneToMany(type => Livre,livre => livre)
    livre:Livre[];
    
   
}