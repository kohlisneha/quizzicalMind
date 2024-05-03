const User = require("../models/user");
const catchAsync = require("./../utils/catchAsync");

exports.registerUser = catchAsync(async (req, res, next) => {
  const newuser = await User.create({
    fullName: req.body.username,
    email: req.body.email,
    password: req.body.password,
  });
  res.status(201).json({
    status: "sucess",
    mssg: "hey signed in sucessfully",
    user: newuser,
  });
});

exports.login = async (req, res, next) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return next(new appError("please provide a email and password ", 400));
  }
  const user = await User.findOne({
    email: email,
  }).select("+password");

  if (!user) {
    return next(new appError("The email or password is incorrect ", 400));
  }

  res.status(201).json({
    status: "sucess",
    mssg: "You are logged in ",
  });
};
