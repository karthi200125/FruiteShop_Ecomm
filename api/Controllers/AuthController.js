import User from '../Models/UserModel.js';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { createError } from '../Utils/errMidelware.js';

export const Register = async (req, res, next) => {
  const { username, email, password } = req.body;
  try {
    const user = await User.findOne({ email });
    if (user) {
      return next(createError(404, "User already exists"))
    }
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    await User.create({ username, email, password: hashedPassword });
    res.status(201).json({ success: true, message: "User created successfully" });
  } catch (error) {
    next(error);
  }
};

export const Login = async (req, res, next) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });
    if (!user) {
      return next(createError(401, "Wrong Email Address"))
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return next(createError(401, "Wrong Password"))
    }

    const { password: userPassword, ...others } = user._doc;

    const token = jwt.sign({ userId: user._id, isAdmin: user.isAdmin }, process.env.JWT_SECRET_KEY, { expiresIn: "1d" });

    res.cookie("access_token", token, {
      httpOnly: true,
      secure: true,
      sameSite: 'Lax',
    }).status(200).json(others);
  } catch (error) {
    next(error);
  }
};

export const Logout = async (req, res) => {
  res.clearCookie("access_token");
  res.status(200).json({ success: true, message: "Logged out successfully" });
};
