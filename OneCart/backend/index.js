import express from "express";
import dotenv from "dotenv";
import ConnectDB from "./config/db.js";
import cookieParser from "cookie-parser";
import cors from "cors";

import authRoutes from "./routes/authRoutes.js";
import userRoutes from "./routes/userRoutes.js";
import productRoutes from "./routes/productRoutes.js";
import cartRoutes from "./routes/cartRoutes.js";
import orderRoutes from "./routes/orderRoutes.js";

dotenv.config();

const app = express();


// ======================================================
// MIDDLEWARE
// ======================================================

app.use(express.json());

app.use(cookieParser());


// ======================================================
// CORS
// ======================================================

const allowedOrigins = [
  "https://onecart-frontend-rd78.onrender.com",
  "https://onecart-admin-4u3l.onrender.com",
  "http://localhost:5173",
  "http://localhost:5174"
];

app.use(
  cors({
    origin: function (origin, callback) {

      // Allow requests without an origin
      // Example: Postman / server-side requests
      if (!origin) {
        return callback(null, true);
      }

      if (allowedOrigins.includes(origin)) {
        return callback(null, true);
      }

      console.log("CORS blocked:", origin);

      return callback(
        new Error("Not allowed by CORS")
      );
    },

    credentials: true,

    methods: [
      "GET",
      "POST",
      "PUT",
      "PATCH",
      "DELETE",
      "OPTIONS"
    ],

    allowedHeaders: [
      "Content-Type",
      "Authorization"
    ]
  })
);


// ======================================================
// ROUTES
// ======================================================

app.use("/api", authRoutes);

app.use("/api/user", userRoutes);

app.use("/api/product", productRoutes);

app.use("/api/cart", cartRoutes);

app.use("/api/order", orderRoutes);


// ======================================================
// TEST ROUTE
// ======================================================

app.get("/", (req, res) => {
  res.status(200).json({
    message: "OneCart Backend is running"
  });
});


// ======================================================
// SERVER
// ======================================================

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {

  ConnectDB();

  console.log(
    `Server is running on port ${PORT}`
  );

});