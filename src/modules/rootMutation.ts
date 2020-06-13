import { mutations as userMutations } from './User';
import { mutations as serviceMutations } from './Service';
import { mutations as ratingMutations } from './Rating';
import { mutations as feedbackMutations } from './Feedback';
import { mutations as voteMutations } from './Vote';

export default {
  ...userMutations,
  ...serviceMutations,
  ...ratingMutations,
  ...feedbackMutations,
  ...voteMutations,
};
