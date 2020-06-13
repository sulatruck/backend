import { mutations as userMutations } from './User';
import { mutations as serviceMutations } from './Service';
import { mutations as ratingMutations } from './Rating';
import { mutations as feedbackMutations } from './Feedback';

export default {
  ...userMutations,
  ...serviceMutations,
  ...ratingMutations,
  ...feedbackMutations,
};
