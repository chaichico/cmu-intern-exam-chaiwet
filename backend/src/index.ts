import 'dotenv/config';

import Elysia from 'elysia';

async function main() {
  app
  console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`);
}

const app = new Elysia()

  // .use(usersRoute)
  // .use(authRoute)
  // .use(cardsRoute)
  // .use(userCardsRoute)
  .get("/", () => "Hello Elysia")
  .listen(3001);


main();