import { Router } from "express";
import { personRepository } from "../om/person.js";

export const router = Router();

router.get("/all", async (req, resp) => {
  const persons = await personRepository.search().return.all();
  resp.send(persons);
});

router.get("/by-last-name/:lastName", async (req, resp) => {
  const lastName = req.params.lastName;
  const persons = await personRepository
    .search()
    .where("lastName")
    .eq(lastName)
    .return.all();

    resp.send(persons)
});

router.get("/old-enough-to-drink-in-america", async (req, resp) => {
    const persons = await personRepository.search().wherej
})

