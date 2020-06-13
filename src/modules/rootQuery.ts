import { queries as userQueries } from './User';
import { queries as serviceQueries } from './Service';

export default {
  ...userQueries,
  ...serviceQueries,
};
