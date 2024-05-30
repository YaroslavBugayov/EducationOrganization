import { body } from "express-validator"

export const loginValidator = [
    body('login', 'Empty login').not().isEmpty(),
    body('password', 'Empty password').not().isEmpty()
]

export const searchSubjectValidator = [
    body('text', 'Empty text').not().isEmpty(),
    body('text', 'Minimum 3 characters').isLength({min: 3})
]

export const getSubjectValidator = [
    body('id', 'Empty text').not().isEmpty(),
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
    body('rsoId', 'Empty rso id').not().isEmpty(),
]

export const createInfoValidator = [
    body('text', 'Empty text').not().isEmpty(),
    body('subjectId', 'Empty subject id').not().isEmpty(),
]

export const deleteInfoValidator = [
    body('infoId', 'Empty info id').not().isEmpty(),
]

export const createDeadlineValidator = [
    body('deadlineDate', 'Empty deadline date').not().isEmpty(),
    body('deadlineDate', 'Date should be written in the format 01:01:2001').matches(/^(0[1-9]|[12][0-9]|3[01]):(0[1-9]|1[0-2]):\d{4}$/),
    body('groupName', 'Empty group name').not().isEmpty(),
    body('subjectId', 'Empty subject id').not().isEmpty(),
]

export const deleteDeadlineValidator = [
    body('deadlineId', 'Empty deadline id').not().isEmpty(),
]