import {ArchitectController} from "./controller/ArchitectController";
import {ArtisanController} from "./controller/ArtisanController";
import {BibliothequeController} from "./controller/BibliothequeController";
import {EntrepriseController} from "./controller/EntrepriseController";
import {LivreController} from "./controller/LivreController";
import {PostController} from "./controller/PostController";
import {EtudiantController} from "./controller/EtudiantController";


export const Routes = [{
    method: "get",
    route: "/architects/",
    controller: ArchitectController,
    action: "all"
}, {
    method: "get",
    route: "/architects/:id",
    controller: ArchitectController,
    action: "one"
}, {
    method: "post",
    route: "/architects",
    controller: ArchitectController,
    action: "save"
}, {
    method: "delete",
    route: "/architects/:id",
    controller: ArchitectController,
    action: "remove"
},{
    method: "get",
    route: "/artisans/",
    controller: ArtisanController,
    action: "all"
}, {
    method: "get",
    route: "/artisants/:id",
    controller: ArtisanController,
    action: "one"
}, {
    method: "post",
    route: "/artisants",
    controller: ArtisanController,
    action: "save"
}, {
    method: "delete",
    route: "/artisans/:id",
    controller: ArtisanController,
    action: "remove"
},{
    method: "get",
    route: "/bibliotheques/",
    controller: BibliothequeController,
    action: "all"
}, {
    method: "get",
    route: "/bibliotheques/:id",
    controller: BibliothequeController,
    action: "one"
}, {
    method: "post",
    route: "/bibliotheques",
    controller: BibliothequeController,
    action: "save"
}, {
    method: "delete",
    route: "/bibliotheques/:id",
    controller: BibliothequeController,
    action: "remove"
},{
    method: "get",
    route: "/entreprises/",
    controller: EntrepriseController,
    action: "all"
}, {
    method: "get",
    route: "/entreprises/:id",
    controller: EntrepriseController,
    action: "one"
}, {
    method: "post",
    route: "/entreprises",
    controller: EntrepriseController,
    action: "save"
}, {
    method: "delete",
    route: "/entreprises/:id",
    controller: EntrepriseController,
    action: "remove"
},{
    method: "get",
    route: "/etudiants/",
    controller: EtudiantController,
    action: "all"
}, {
    method: "get",
    route: "/etudiants/:id",
    controller: EtudiantController,
    action: "one"
}, {
    method: "post",
    route: "/etudiants",
    controller: EtudiantController,
    action: "save"
}, {
    method: "delete",
    route: "/etudiants/:id",
    controller: EtudiantController,
    action: "remove"
},{
    method: "get",
    route: "/livres/",
    controller: LivreController,
    action: "all"
}, {
    method: "get",
    route: "/livres/:id",
    controller: LivreController,
    action: "one"
}, {
    method: "post",
    route: "/livres",
    controller: LivreController,
    action: "save"
}, {
    method: "delete",
    route: "/livres/:id",
    controller: LivreController,
    action: "remove"
},{
    method: "get",
    route: "/posts/",
    controller: PostController,
    action: "all"
}, {
    method: "get",
    route: "/posts/:id",
    controller: PostController,
    action: "one"
}, {
    method: "post",
    route: "/posts",
    controller: PostController,
    action: "save"
}, {
    method: "delete",
    route: "/posts/:id",
    controller: PostController,
    action: "remove"
}];