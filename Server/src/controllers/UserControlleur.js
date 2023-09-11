const User = require("../models/User");
const jwt = require("jsonwebtoken");
const EMAIL_SECRET = "mysecretemail";
const nodemailer = require("nodemailer");
const bcrypt = require("bcrypt");
require("dotenv").config();
const _ = require("lodash");
process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";

//creating transporter (the sender of the email verification)

const transporter = nodemailer.createTransport({
  service: "Gmail",
  auth: {
    user: process.env.GMAIL_USER,
    pass: process.env.GMAIL_PASS,
  },
});

//Signup function
const addUser = async (req, res) => {
  try {
    const userData = req.body;
    const user = userData.params.input;
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(user.Password, saltRounds);
    const newUser = new User({
      ...user,
      Password: hashedPassword,
    });

    try {
      var emailToken = jwt.sign(
        {
          user: _.pick(newUser, "id"),
        },
        EMAIL_SECRET,
        {
          expiresIn: "15m",
        }
      );
    } catch (error) {
      return res.json(error.message);
    }

    const url = `http://localhost:5000/user/SignUp/${emailToken}`;

    transporter.sendMail({
      to: newUser.Email,
      subject: "Confirm Email",
      html: `
        <!DOCTYPE html>
        <html lang="en">
          <head>
            <meta charset="UTF-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Tailwind CSS Simple Email Template Example</title>
            <link href="https://unpkg.com/tailwindcss@^2/dist/tailwind.min.css" rel="stylesheet">
          </head>
          <body>
            <div class="flex items-center justify-center min-h-screen p-5 bg-blue-100 min-w-screen">
              <div class="max-w-xl p-8 text-center text-gray-800 bg-white shadow-xl lg:max-w-3xl rounded-3xl lg:p-12">
                <h3 class="text-2xl">Thanks for signing up for Websitename!</h3>
                <div class="flex justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" class="w-24 h-24 text-green-400" fill="none"
                    viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1"
                      d="M3 19v-8.93a2 2 0 01.89-1.664l7-4.666a2 2 0 012.22 0l7 4.666A2 2 0 0121 10.07V19M3 19a2 2 0 002 2h14a2 2 0 002-2M3 19l6.75-4.5M21 19l-6.75-4.5M3 10l6.75 4.5M21 10l-6.75 4.5m0 0l-1.14.76a2 2 0 01-2.22 0l-1.14-.76" />
                  </svg>
                </div>
                <p>We're happy you're here. Let's get your email address verified:</p>
                <div class="mt-4">
                  <a href="${url}" class="px-2 py-2 text-blue-200 bg-blue-600 rounded">Click to Verify Email</a>
                </div>
              </div>
            </div>
          </body>
        </html>
      `,
    });

    newUser
      .save()
      .then((result) => {
        res.json({
          status: "SUCCESS",
          message: "SignUp successful",
          data: result,
          emailToken,
        });
      })
      .catch((err) => {
        res.json({
          status: "FAILED",
          message: "An error occurred while saving user account" + err.message,
        });
      });
  } catch (error) {
    console.log(error);
  }
};

const confirmEmail = async (req, res) => {
  try {
    const decodedToken = jwt.verify(req.params.emailToken, EMAIL_SECRET);
    const id = decodedToken.user.id;
    const userConfirmed = await User.findByIdAndUpdate(
      id,
      {
        $set: { Confirmed: true },
      },
      { new: true }
    );
    res.redirect("http://localhost:3000/SignIn");
  } catch (error) {
    console.log(error);
  }
};

const createToken = (id) => {
  return jwt.sign({ id }, "User information secret");
};

const SignIn = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await login(email, password, res);
    const token = createToken(user.id);
    res.cookie("jwt", token, { httpOnly: true, maxAge: 250000 });
    res.status(200).json({ token });
  } catch (error) {
    console.log(error);
  }
};

const login = async (email, password, res) => {
  try {
    const user = await User.findOne({ Email: email });
    if (!user) {
      res.status(500).json("User doesn't exist");
    }
    if (!user.Confirmed) {
      res.status(500).json("Email not confirmed yet!");
    }
    const auth = await bcrypt.compare(password, user.Password);
    if (auth) {
      return user;
    } else {
      res.status(500).json("Incorrect password!");
    }
  } catch (error) {
    console.log(error);
  }
};

const getUserById = async (req, res) => {
  try {
    console.log(req.body.userId)
    const userId = req.body.userId;
    const user = await User.findById(userId);
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json(error);
  }
};

module.exports = {
  confirmEmail,
  getUserById,
  SignIn,
  addUser,
};
