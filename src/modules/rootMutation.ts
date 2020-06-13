import { mutations as userMutations } from './User';
import { mutations as serviceMutations } from './Service';
import { mutations as ratingMutations } from './Rating';

export default {
  ...userMutations,
  ...serviceMutations,
  ...ratingMutations,
};
