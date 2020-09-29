import express from "express";

import ContactsController from "./controllers/ContactsController";
import SocialNetworks from "./controllers/SocialNetworksController";

const routes = express.Router();

const contactsControllers = new ContactsController();
const socialNetworksControllers = new SocialNetworks();

routes.get("/contacts", contactsControllers.index);
routes.post("/contact", contactsControllers.create);

routes.get("/social-networks", socialNetworksControllers.index);

export default routes;
