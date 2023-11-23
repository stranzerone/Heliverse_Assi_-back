import { DataModel } from "../Schemas/dataSchema.js";
import { Info } from "./array.js";

export const insertData = async () => {
  try {
    const existingData = await DataModel.findOne({ id:"1" });

    if (!existingData) {
      await DataModel.insertMany(Info)
      console.log('Data inserted successfully');

    } else {
      console.log('Data already exists, skipping insertion');

    }
  } catch (error) {
    console.error('Error inserting data:', error.message);
  }
};




export const getUsers=async(req,res)=>{

  try{
    const users = await DataModel.find({});

    if(users){
      res.status(200).json(users)

    }else{
      res.status(401).json('users not found')


    }
  }catch(error){
    console.error(error);
  }

}



// GET /api/users: Retrieve all users with pagination support.
// GET /api/users/:id: Retrieve a specific user by ID.
// POST /api/users: Create a new user.
// PUT /api/users/:id: Update an existing user.
// DELETE /api/users/:id: Delete a user.
// Implement filtering, searching, and pagination on the backend:




export const getUserById=async(req,res)=>{
const id = req.body.id
  try{
    const user = await DataModel.find({id:id});

    if(user){
      res.send(user);
    }else{
      res.status(401).json('user ')

    }
  }catch(error){
    console.error(error);
  }

}



export const addUser = async (req, res) => {
  const u = req.body; // No need to wrap req.body in an object

  try {
    const newUser = new DataModel({id:u.id,email:u.email,first_name:u.firstName,last_name:u.lastName,gender:u.gender,available:u.availability,avatar:u.avatar,domain:u.domain});
    await newUser.save();

    res.status(200).json('User added successfully');
  } catch (error) {
    console.error(error);
    res.status(500).json('Internal Server Error');
  }
};

  



  export const updateUser =async(req,res)=>{
    const id = req.body.id

      try{
        const user = await DataModel.findOne({id:id});
    
        if(user){
          const updatedUser = {
            $set: {
              first_name: req.body.firstName,
              last_name: req.body.lastName,
            },
          }
              await DataModel.findOneAndUpdate({id:id},updateUser)
              res.status(200).json('user updated')

        }else{
          res.status(401).json('user ')

        }
      }catch(error){
        console.error(error);
      }
    
    }
    
  

    export const deleteUser = async(req,res)=>{
      const id = req.params.id;
      console.log(id)
      try{
        const delte = await DataModel.deleteOne({id:id})

        if(delte){
       
          res.status(200).json('user deledted')
          console.log(delte);
        }else{
          res.status(401).json('user ')

        }

      }catch(error){
        console.error(error)
      }
    }