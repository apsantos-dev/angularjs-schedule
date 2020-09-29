import Knex from "knex";

export async function up(knex: Knex) {
  return knex.schema.createTable("socialNetworks", (table) => {
    table.increments("id").primary();
    table.boolean("active").notNullable();
    table.string("text").notNullable();
    table.string("url").notNullable();
  });
}

export async function down(knex: Knex) {
  return knex.schema.dropTable("socialNetworks");
}
