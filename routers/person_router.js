import { Router } from "express";
import { personRepository } from "../om/person.js";

export const router = Router()

router.put('/', async (req, resp) => {
    const person = await personRepository.createAndSave(req.body)
    resp.send(person)
})

router.get('/:id', async (req, resp) => {
    const person = await personRepository.fetch(req.params.id)
    resp.send(person)
})

router.post('/:id', async (req, resp) => {
    const person = await personRepository.fetch(req.params.id)

    person.firstName = req.body.firstName ?? null
    person.lastName = req.body.lastName ?? null
    person.age = req.body.age ?? null
    person.verified = req.body.verified ?? null
    person.location = req.body.location ?? null
    person.locationUpdated = req.body.locationUpdated ?? null
    person.skills = req.body.skills ?? null
    person.personalStatement = req.body.personalStatement ?? null

    await personRepository.save(person)

    resp.send(person)
})

router.delete('/:id', async (req, resp) => {
    await personRepository.remove(req.params.id)
    resp.send({ entityId: req.params.id })
})
