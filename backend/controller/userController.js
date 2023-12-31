import { MongoClient } from 'mongodb';
import 'dotenv/config'

import { faker } from '@faker-js/faker';

export const signInUserController = async (req, res) => {
  
  const { user_email, password } = req.body;
  const client = new MongoClient(process.env.MONGODB_CONNENCTION_URL);

  async function signInfn() {
    try {
      const database = client.db("nscarwebsite");
      const checkUserAccount = database.collection("user");
      
      const query = { user_email:user_email };
      const userMatch = await checkUserAccount.findOne(query);

      if(!userMatch){
        return res.status(400).json({ message: 'Please enter the correct email' })
      }

      if(userMatch.password !== password){
        return res.status(400).json({ message: 'Please enter the correct password' })
      }

      return res.status(201).json({ message: `Welcome ${userMatch.user_name}` })
      
    }
    finally {
      await client.close();
    }
  }
  signInfn().catch(console.dir);
};

export const signUpUserController = async (req, res) => {
    const {user_email, password} = req.body;
    const client = new MongoClient(process.env.MONGODB_CONNENCTION_URL);
  
    const user_name_data = faker.person.fullName()
    const user_info_data = {
      phone: faker.phone.number()
    };
    const user_location_data = faker.location.city()
  
    async function signUpfn() {
      try {
        const database = client.db("nscarwebsite");
        const userAccount = database.collection("user");
  
        const addUser = {
          user_email: user_email,
          user_name: user_name_data,
          user_info: user_info_data,
          user_location: user_location_data,
          password: password,
          isActive: true
        }

        const result = await userAccount.insertOne(addUser);
     
        console.log(`A document was inserted with the _id: ${result.insertedId}`)
        return res.status(201).json({ message: `Welcome ${addUser.user_name}` })
  
      }
      finally {
        await client.close();
      }
    }
    signUpfn().catch(console.dir);
  };