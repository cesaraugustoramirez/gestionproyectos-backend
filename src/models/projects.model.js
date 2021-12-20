import mongoose from 'mongoose';
const { Schema } = mongoose;


const enrollmentsSchema = new Schema (
  {
    /*_id: {
      Type: Schema.ObjectId
      },*/
      user_id: {
      Type: Schema.ObjectId
      },
      state: {
      enum: ['PENDIENTE','ACEPTADA', 'RECHAZADA','CANCELADA']
      },
      enrollmentDate: {
      Type: Date
      },
      egressDate: {
      Type: Date
      }
}
);

const progressSchema = new Schema(
  {
   /* _id: {
        Type: Schema.ObjectId
    },*/
    addDate: {
        Type: Date
    },
    description: {
       Type: String
    },
    observations: {
        Type: String
    }
}

);


const projectsSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  generalObjective: {
    type: String,
    required: true,
  },
  specificObjectives: {
    type: [],
    required: true,
  },
  budget: {
    type: Number,
    required: true,
  },
  startDate: {
    type: Date,
    required: true,
  },
  endDate: {
    type: Date,
    required: true,
  },
  leader_id: {
    type: Schema.ObjectId,
    required: true,
  },
  state: {
    type: String,
    enum: ['ACTIVO', 'INACTIVO'],
    required: true,
  },
  phase: {
    type: String,
    enum: [null,'INICIADO', 'ENDESARROLLO', 'TERMINADO'],
  },
  progress:[progressSchema],
  enrollments: [enrollmentsSchema]
 
});

const Projects = new mongoose.model('projects', projectsSchema);

export default Projects;