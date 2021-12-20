import Projects from "../models/projects.model.js";
import Users from "../models/users.model.js";

const allProjects = async (parent, args, { user, errorMessage }) => {
  if(!user) {
    throw new Error(errorMessage);
  }
  const projects = await Projects.find();
  console.log(projects);
  return projects;
};

const project = async (parent, args) => {
  const project = await Projects.findById(args._id);
  console.log(project);
  return project;
};

const leaderProjects = async (parent) => {
  const leaderprojects = await Projects.findById(parent.leader_id);
  return leaderprojects;
};


export default {
  projectQueries: {
    allProjects,
    project,
    leaderProjects
  }
};
