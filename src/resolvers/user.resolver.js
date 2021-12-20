// vendors
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';

// constants
import { USER_STATE, ROLES } from '../constants/user.constants.js';

// models
import Users from "../models/users.model.js";

const allUsers = async (parent, args, { user, errorMessage }) => {
  if(!user) {
    throw new Error(errorMessage);
  }
  if(user.role !== ROLES.ADMINISTRADOR) {
    throw new Error('Access denied');
  }
  return await Users.find();
};

const user = async (parent, args, { user, errorMessage }) => {
  if(!user) {
    throw new Error(errorMessage);
  }
  return user;
};

const register = async (parent, args) => {
  const user = new Users({
    ...args.input,
    state: USER_STATE.PENDIENTE,
    password: await bcrypt.hash(args.input.password, 12),
  });
  return user.save();
};

const userById = async (parent, args) => {
  const user = await Users.findOne({ _id: args.id });
  return user;
};

const userByEmail = async (parent, args) => {
  const user = await Users.findOne({ email: args.email });
  return user;
};

const login = async (parent, args) => {
  const user = await Users.findOne({ email: args.email });
  if (!user) {
    throw new Error('User not found');
  }
  const isValid = await bcrypt.compare(args.password, user.password);
  if(!isValid) {
    throw new Error('Wrong password');
  }
  const token = await jwt.sign(
    { user },
    // eslint-disable-next-line no-undef
    process.env.SECRET,
    { expiresIn: '30m' }
  );
  return token;
};


export default {
  userQueries: {
    allUsers,
    user,
    userByEmail,
    userById,
  },
  userMutations: {
    register,
    login,
  }
}