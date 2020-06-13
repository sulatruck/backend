import { mutations as userMutations } from './User';
import { mutations as serviceMutations } from './Service';

export default {
  ...userMutations,
  ...serviceMutations,
};
