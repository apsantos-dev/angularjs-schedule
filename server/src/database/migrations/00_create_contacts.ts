import Knex from "knex";

export async function up(knex: Knex) {
  return knex.schema.createTable("contacts", (table) => {
    table.increments("id").primary();
    table.string("avatar_url").notNullable();
    table.string("bio").notNullable();
    table.string("html_url").notNullable();
    table.string("location").notNullable();
    table.string("name").notNullable();
    table.string("obs").notNullable();
    table.string("user").notNullable();
    table.integer("user_id").notNullable();
  });
}

export async function down(knex: Knex) {
  return knex.schema.dropTable("contacts");
}
