import {Router} from "express";
import multer from "multer";

import uploadConfig from "./config/upload";
import OrphanagesController from "./controllers/OrphanagesController";
import UsersController from "./controllers/UsersController";
import SessionsController from "./controllers/SessionsController";
import ensureAuthenticated from "./middlewares/ensureAuthenticated";

const routes = Router();
const upload = multer(uploadConfig);

routes.get("/orphanages", OrphanagesController.index);
routes.get("/orphanages/:id", OrphanagesController.show);
routes.post("/orphanages", upload.array("images"), OrphanagesController.create);
routes.put("/orphanages/:id", ensureAuthenticated, upload.array("images"), OrphanagesController.update);
routes.delete("/orphanages/:id", ensureAuthenticated, upload.array("images"), OrphanagesController.delete);

routes.get("/users", UsersController.index);
routes.get("/users/:id", UsersController.show);
routes.post("/users", UsersController.create);

routes.post("/login", SessionsController.create);

export default routes;
