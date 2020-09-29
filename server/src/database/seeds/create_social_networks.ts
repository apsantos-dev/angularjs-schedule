import Knex from "knex";

export async function seed(knex: Knex) {
  await knex("socialNetworks").insert([
    {
      active: true,
      text: "Instagram",
      url: "https://www.instagram.com/apsantos_dev/",
    },
    {
      active: true,
      text: "Facebook",
      url: "https://www.facebook.com/apsantos.dev",
    },
    { active: true, text: "GitHub", url: "https://github.com/apsantos-dev" },
    {
      active: true,
      text: "Linkedin",
      url: "https://www.linkedin.com/in/apsantos-dev/",
    },
    { active: true, text: "Twitter", url: "https://twitter.com/apsantos_dev" },
    { active: false, text: "Youtube", url: "" },
  ]);
}
