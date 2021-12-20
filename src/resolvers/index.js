import userResolver from "./user.resolver.js";
import projectResolver from "./project.resolver.js";
import miscResolver from "./misc.resolver.js";

const { userQueries, userMutations, ...userRest } = userResolver;
const { projectQueries, projectMutations, ...projectRest } = projectResolver;
const { miscQueries, miscMutations, ...miscRest} = miscResolver;

export default {
  Query: {
    ...userQueries,
    ...projectQueries,
    ...miscQueries,
  },
  Mutation: {
    ...userMutations,
    ...projectMutations,
    ...miscMutations,
  },
  ...userRest,
  ...projectRest,
  ...miscRest,
};
