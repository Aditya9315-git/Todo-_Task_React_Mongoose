const express=require('express')
const { Tasksave, Taskget, Taskdelete } = require('../Controller/UserController')
const Routes=express.Router()

Routes.post('/Tasksave',Tasksave)
Routes.get('/Taskget',Taskget)
Routes.delete(`/Taskdelete/:id`,Taskdelete)

module.exports= Routes