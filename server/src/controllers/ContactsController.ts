import { Request, Response } from "express";

import db from "../database/connection";

export default class ContactsController {
  async index(request: Request, response: Response) {
    const items = await db("contacts").select("*");

    return response.status(201).json(items);
  }

  async create(request: Request, response: Response) {
    const trx = await db.transaction();

    const {
      avatar_url,
      bio,
      html_url,
      id,
      location,
      name,
      obs,
      user,
    } = request.body;

    try {
      await trx("contacts").insert({
        avatar_url,
        bio,
        html_url,
        location,
        name,
        obs,
        user,
        user_id: id,
      });

      await trx.commit();

      return response.status(201).json({
        message: "CONTACT_SUCCESSFULLY_REGISTERED",
      });
    } catch (err) {
      await trx.rollback();

      return response.status(400).json({
        error: "Unexpected error while creating new contact",
      });
    }
  }
}
