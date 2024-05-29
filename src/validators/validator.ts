import { body } from "express-validator"

export const loginValidator = [
    body('login', 'Empty login').not().isEmpty(),
    body('password', 'Empty password').not().isEmpty()
]

export const searchSubjectValidator = [
    body('text', 'Empty text').not().isEmpty(),
    body('text', 'Minimum 3 characters').isLength({min: 3})
]

export const updateSubjectValidator = [
    body('oldName', 'Empty oldName').not().isEmpty(),
    body('newName', 'Empty newName').not().isEmpty()
]

export const subjectValidator = [
    body('name', 'Empty name').not().isEmpty(),
]