
import { ChildEntity} from 'typeorm';
import {Personne} from "./Personne";

@ChildEntity()
export class Artisan extends Personne{
  
}
