const { Router } = require('express');
const router = Router()

const {getUser, CreateUser, deleteUser} = require('../controllers/users.controller');

router.route('/')
    .get(getUser)
    .post(CreateUser)

router.route('/:id')
    .delete(deleteUser)


module.exports = router