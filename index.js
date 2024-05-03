const express = require("express");
const path = require("path");
const PORT = 5157;
const userRoute = require("./routes/user");
const app = express();
const cookiePaser = require("cookie-parser");
const mongoose = require("mongoose");

app.use(express.static(path.join(__dirname, "public")));
app.use(express.json());
app.use(cookiePaser());

app.use("/user", userRoute);

mongoose
  .connect("mongodb://127.0.0.1:27017/quizz-app")
  .then((e) => console.log("MongoDB Connected"));

function generateCouponCode(length) {
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

  let coupon = "";
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    coupon += characters.charAt(randomIndex);
  }
  return coupon;
}

app.get("/generate", (req, res) => {
  const code = generateCouponCode(8);
   console.log(code);
  res.send(code);
});

app.listen(5157, () => console.log(`server started at ${PORT}`));
