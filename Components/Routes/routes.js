import express from 'express'
import { addUser, deleteUser, getUserById, getUsers, updateUser } from '../Controller/dataController.js'

const route = express.Router()




route.get("/",getUsers)

route.get("/findOne",getUserById)

route.post("/createUser",addUser)

route.put("/updateUser",updateUser)

route.delete("/deleteUser/:id",deleteUser)



export default route
