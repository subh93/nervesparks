import { MongoClient } from 'mongodb';
import 'dotenv/config'

import { faker } from '@faker-js/faker';

export const signInDealerController = async (req, res) => {
  
  const { dealership_email, password } = req.body;
  const client = new MongoClient(process.env.MONGODB_CONNENCTION_URL);

  async function signInfn() {
    try {
      const database = client.db("nscarwebsite");
      const checkDealerAccount = database.collection("dealer");
      
      const query = { dealership_email:dealership_email };
      const dealerMatch = await checkDealerAccount.findOne(query);

      if(!dealerMatch){
        return res.status(400).json({ message: 'Please enter the correct email' })
      }

      if(dealerMatch.password !== password){
        return res.status(400).json({ message: 'Please enter the correct password' })
      }

      return res.status(201).json({ message: `Welcome ${dealerMatch.dealership_name}` })
      
    }
    finally {
      await client.close();
    }
  }
  signInfn().catch(console.dir);
};

export const signUpDealerController = async (req, res) => {
    const {dealership_email, password} = req.body;
    const client = new MongoClient(process.env.MONGODB_CONNENCTION_URL);

    const dealership_name_data = faker.person.fullName()
    const dealership_info_data = {
      phone: faker.phone.number()
    };
    const dealership_location_data = faker.location.city()
  
    async function signUpfn() {
      try {
        const database = client.db("nscarwebsite");
        const userAccount = database.collection("dealer");
  
        const addDealer = {
          dealership_email: dealership_email,
          dealership_name: dealership_name_data,
          dealership_info: dealership_info_data,
          dealership_location: dealership_location_data,
          password: password,
          isActive: true
        }
        const result = await userAccount.insertOne(addDealer);
     
        console.log(`A document was inserted with the _id: ${result.insertedId}`)
        return res.status(201).json({ message: `Welcome ${addDealer.dealership_name}` })
      }
      finally {
        await client.close();
      }
    }
    signUpfn().catch(console.dir);
  };