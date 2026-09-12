// import mongoose, { connect } from "mongoose"

// const ConnectDB = async()=>{
//   try {
//         const connect =   await mongoose.connect(process.env.MONGODB_URL)
//         console.log("DB is connected")
//   } catch (error) {
//     console.log("Db error")
//   }
// }

// export default ConnectDB




import mongoose from "mongoose";

const ConnectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URL);

    console.log("DB is connected");
  } catch (error) {
    console.error("MongoDB Connection Error:", error.message);
    process.exit(1);
  }
};

export default ConnectDB;