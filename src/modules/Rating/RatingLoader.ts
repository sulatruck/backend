import { getRepository } from 'typeorm';

import Rating from './RatingModel';

export async function saveRating(
  _: void,
  { input: rating }: { [argName: string]: Rating },
): Promise<Rating | undefined> {
  const ratingRepository = getRepository(Rating);

  const findRating = ratingRepository.findOne({
    where: {
      service_id: rating.service_id,
      user_id: rating.user_id,
    },
  });

  if (findRating) {
    return findRating;
  }

  const databaseRating = ratingRepository.create(rating);

  await ratingRepository.save(databaseRating);

  return databaseRating;
}

export async function getRating(): Promise<Rating[]> {
  const ratingRepository = getRepository(Rating);

  const ratings = (await ratingRepository.find()).map(rating => {
    if (rating.anonymous) {
      delete rating.user_id;
    }
    return rating;
  });
  return ratings;
}
