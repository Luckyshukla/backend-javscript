import mongoose from 'mongoose';
import { DB_NAME } from '../constent.js';

const connectDB = async () => {
  try {
    const connectionInstance = await mongoose.connect(
      `${process.env.MONGODB_URL}/${DB_NAME}`
    );  
    // console.log(connectionInstance?.connection?.host, 'connectionInstance');
    console.log(
      `\n Mongo DB Connecte !! DB Host:${connectionInstance?.connection?.host}`
    );
  } catch (error) {
    console.log('MONGO DB ERROR', error);
    // throw error;
    process.exit(1);
  }
};
export default connectDB;

// import { Client } from 'pg';
// import { DB_NAME, PG_CONNECTION_STRING } from '../constent.js';

// const connectDB = async () => {
//   const client = new Client({
//     connectionString: PG_CONNECTION_STRING,
//   });

//   try {
//     await client.connect();
//     console.log('\n PostgreSQL Database Connected!');
//   } catch (error) {
//     console.error('PostgreSQL Database Connection Error:', error.message);
//     process.exit(1);
//   }
// };

// export default connectDB;
