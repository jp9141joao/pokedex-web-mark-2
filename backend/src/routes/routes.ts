import { Router } from "express";
import { authentication, updateInfo } from "../controllers/authController";

const routes = Router();

routes.post('/home', authentication)
routes.put('/overview', updateInfo)

export { routes };