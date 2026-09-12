import express from "express"
import dotenv from "dotenv"
import ConnectDB from "./config/db.js";
import cookieParser from "cookie-parser";
import authRoutes from "./routes/authRoutes.js";
import cors from "cors"
import userRoutes from "./routes/userRoutes.js";
import productRoutes from "./routes/productRoutes.js";
import cartRoutes from "./routes/cartRoutes.js";
import orderRoutes from "./routes/orderRoutes.js";
dotenv.config();


const app = express()
app.use(cookieParser())
app.use(express.json())
app.use(cors({
  origin:["https://onecart-frontend-rd78.onrender.com","http://localhost:5174"],
  credentials:true
}))

const PORT = process.env.PORT || 4000

app.use("/api",authRoutes)
app.use("/api/user",userRoutes)
app.use("/api/product",productRoutes)
app.use("/api/cart",cartRoutes)
app.use("/api/order",orderRoutes)




app.listen(PORT,()=>{
 ConnectDB()
  console.log("Server is connected....")
})
