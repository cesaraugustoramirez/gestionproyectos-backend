import userSchema from "./user.schema.js";
import projectSchema from "./project.schema.js";
import miscSchema from "./misc.schema.js";

export default [
  ...userSchema,
  ...projectSchema,
  ...miscSchema,
]