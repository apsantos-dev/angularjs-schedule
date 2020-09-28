import express from "express";

import ContactsController from "./controllers/ContactsController";

const routes = express.Router();

const contactsControllers = new ContactsController();

routes.get("/contacts", contactsControllers.index);
routes.post("/contact", contactsControllers.create);

export default routes;
