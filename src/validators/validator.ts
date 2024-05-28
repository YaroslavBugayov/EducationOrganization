import { body } from "express-validator"

export const loginValidator = [
    body('login', 'Empty login').not().isEmpty(),
    body('password', 'Empty password').not().isEmpty()
]