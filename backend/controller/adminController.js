import { MongoClient } from 'mongodb';
import 'dotenv/config'

export const signInAdminController = async (req, res) => {
  
  const { admin_name, password } = req.body;
  const client = new MongoClient(process.env.MONGODB_CONNENCTION_URL);

  async function signInfn() {
    try {
      const database = client.db("nscarwebsite");
      const checkAdminAccount = database.collection("admin");
      
      const query = { admin_name:admin_name };
      const adminMatch = await checkAdminAccount.findOne(query);

      if(!adminMatch){
        return res.status(400).json({ message: 'Please enter the correct name' })
      }

      if(adminMatch.password !== password){
        return res.status(400).json({ message: 'Please enter the correct password' })
      }

      return res.status(201).json({ message: `Welcome Admin` })
      
    }
    finally {
      await client.close();
    }
  }
  signInfn().catch(console.dir);
};