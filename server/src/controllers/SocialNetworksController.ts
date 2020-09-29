import { Request, Response } from "express";

import db from "../database/connection";

export default class ContactsController {
  async index(request: Request, response: Response) {
    const items = await db("socialNetworks").select("*");

    return response.status(201).json(items);
  }
}
