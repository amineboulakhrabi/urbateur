import {ArchitectService} from "./service/Architect.service";

export const Routes = [{
    method: "post",
    route: "/signup",
    controller: ArchitectService,
    action: "insert"
}
];