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

export const createSubjectValidator = [
    body('name', 'Empty name').not().isEmpty(),
]

export const deleteSubjectValidator = [
    body('name', 'Empty name').not().isEmpty(),
]

export const createRsoValidator = [
    body('typeOfWork', 'Empty type of work').not().isEmpty(),
    body('subjectId', 'Empty subject id').not().isEmpty(),
]

export const deleteRsoValidator = [
    body('rsoId', 'Empty id').not().isEmpty(),
]

export const createInfoValidator = [
    body('text', 'Empty text').not().isEmpty(),
    body('subjectId', 'Empty subject id').not().isEmpty(),
]

export const deleteInfoValidator = [
    body('infoId', 'Empty id').not().isEmpty(),
]