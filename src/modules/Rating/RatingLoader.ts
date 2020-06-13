import { getRepository } from 'typeorm';

import Rating from './RatingModel';

export async function saveRating(
  _: void,
  { input: rating }: { [argName: string]: Rating },
): Promise<Rating> {
  const ratingRepository = getRepository(Rating);

  const databaseRating = ratingRepository.create(rating);

  await ratingRepository.save(databaseRating);

  return databaseRating;
}

export async function getRating(): Promise<Rating[]> {
  const ratingRepository = getRepository(Rating);

  const rating = await ratingRepository.find();
  return rating;
}
