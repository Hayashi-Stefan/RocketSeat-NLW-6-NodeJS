import { Router } from "express"
import { AuthenticateUserController } from "./controllers/AuthenticateUserController";
import { CreateComplimentController } from "./controllers/CreateComplimentController";
import { CreateTagController } from "./controllers/CreateTagController";
import { CreateUserController } from "./controllers/CreateUserController"
import { ensureAdmin } from "./middlewares/ensureAdmin";

const router = Router()

const authenticateUserController = new AuthenticateUserController();
const createUserController = new CreateUserController();
const createTagController = new CreateTagController();
const createComplimentController = new CreateComplimentController();

// -- ROTA DE AUTENTICAÇÃO --
router.post("/login", authenticateUserController.handle);

// -- ROTAS USERS --
router.post("/users", createUserController.handle)

// -- ROTAS TAGS --
router.post("/tags", ensureAdmin, createTagController.handle)

// -- ROTAS COMPLIMENTS --
router.post("/compliments", createComplimentController.handle);

export { router }