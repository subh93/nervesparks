import { MongoClient } from 'mongodb';
import 'dotenv/config'

import { faker } from '@faker-js/faker';

export const showCarsController = async (req, res) => {
  
  const client = new MongoClient(process.env.MONGODB_CONNENCTION_URL);

  async function showCarfn() {
    try {
      const database = client.db("nscarwebsite");
      const showAllCars = database.collection("cars");
      
      const query = {};
      const showAllCarsDetails = await showAllCars.find(query).toArray();
      
      return res.status(201).json({ showAllCarsDetails })
      
    }
    finally {
      await client.close();
    }
  }
  showCarfn().catch(console.dir);
};

export const addCarController = async (req, res) => {

    const client = new MongoClient(process.env.MONGODB_CONNENCTION_URL);
  
    const car_name_data = faker.vehicle.vehicle()
    const type_data = faker.vehicle.type()
    const car_info_data = {
        manufacturer: faker.vehicle.manufacturer()
    };
    const model_data = faker.vehicle.model()
  
    async function addCarfn() {
      try {
        const database = client.db("nscarwebsite");
        const carAccount = database.collection("cars");
  
        const addCar = {
          name: car_name_data,
          type: type_data,
          car_info: car_info_data,
          model: model_data,
          dealership_id: "6591b717a5764bf15c2dc460"
        }
        const result = await carAccount.insertOne(addCar);
     
        console.log(`A document was inserted with the _id: ${result.insertedId}`)
        return res.status(201).json({ message: `Car Details Added Successfully` })
  
      }
      finally {
        await client.close();
      }
    }
    addCarfn().catch(console.dir);
  };