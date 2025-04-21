import mongoose from "mongoose";
import 'dotenv/config'
import chalk from "chalk";
const myurl = process.env.MONGODB_URL

const connectToDb= async()=>{

    try{
        await mongoose.connect( myurl,{dbName:"practice"})
        console.log(chalk.bgBlue.white('connected to MongoDB connection'));
    }
    catch(error){
        console.error("error in showing in db",error)
    }
}

export default connectToDb