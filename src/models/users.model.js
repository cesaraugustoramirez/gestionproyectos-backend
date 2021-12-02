import mongoose from 'mongoose';
const { Schema } = mongoose;

const usersSchema = new Schema({
  documentId: {
    type: String,
    unique: true,
    required: true,
  },
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    unique: true,
    required: true,
  },
  role: {
    type: String,
    enum: ['Administrador', 'Lider', 'Estudiante'],
    required: true,
  },
  state: {
    type: String,
    enum: ['Pendiente', 'Autorizado', 'No autorizado'],
    required: true,
  },
  password: {
    type: String,
    required: true,
  }
}, { versionKey: false });

const Users = new mongoose.model('users', usersSchema);

export default Users;
