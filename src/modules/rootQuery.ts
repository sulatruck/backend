import { queries as userQueries } from './User';
import { queries as serviceQueries } from './Service';
import { queries as ratingQueries } from './Rating';

export default {
  ...userQueries,
  ...serviceQueries,
  ...ratingQueries,
};
