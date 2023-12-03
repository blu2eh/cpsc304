//middlewares
import express from "express";
import cookieParser from "cookie-parser";
import multer from "multer";
import cors from "cors"; // Import cors middleware

//auth
import authRoutes from "./routes/auth.js";
//routes
//From original project
import userRoutes from "./routes/users.js";
import postRoutes from "./routes/posts.js";
// import welcomePage from "./routes/welcome.js"
//Our project
import profileRoute from "./routes/profile.js";
import refrigeratorRoute from "./routes/refrigerator.js";
import pantryRoute from "./routes/pantry.js";
import inventoryRoute from "./routes/inventory.js";

//initialize app
const app = express();

//middleware
// Use cors middleware with explicit origin and credentials
app.use(cors({
  origin: 'http://localhost:3000', // Update this with the actual origin of your frontend
  credentials: true,
}));
app.use(express.json());
app.use(cookieParser());

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "../client/public/upload");
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + file.originalname);
  },
});

const upload = multer({ storage });

//app routes post
app.post("/api/upload", upload.single("file"), function (req, res) {
  const file = req.file;
  res.status(200).json(file.filename);
});

// app.use("/", welcomePage)
app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);
app.use("/api/post", postRoutes);
app.use("/api/profile", profileRoute);
app.use("/api/refrigerator", refrigeratorRoute);
app.use("/api/pantry", pantryRoute);
app.use("/api/inventory", inventoryRoute);

app.listen(8800, () => {
  console.log("Connected!");
});
