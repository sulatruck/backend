import { queries as userQueries } from './User';
import { queries as serviceQueries } from './Service';
import { queries as ratingQueries } from './Rating';
import { queries as feedbackQueries } from './Feedback';
import { queries as voteQueries } from './Vote';

export default {
  ...userQueries,
  ...serviceQueries,
  ...ratingQueries,
  ...feedbackQueries,
  ...voteQueries,
};
