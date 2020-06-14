import { getRepository } from 'typeorm';

import Vote from './VoteModel';

export async function saveVote(
  _: void,
  { input: vote }: { [argName: string]: Vote },
): Promise<Vote | undefined> {
  const votesRepository = getRepository(Vote);

  if (vote.rating_id && vote.feedback_id) {
    return undefined;
  }

  const findVoteByFeedback = votesRepository.findOne({
    where: {
      feedback_id: vote.feedback_id,
    },
  });

  const findVoteByRating = votesRepository.findOne({
    where: {
      feedback_id: vote.rating_id,
    },
  });

  if (findVoteByFeedback) {
    return findVoteByFeedback;
  }

  if (findVoteByRating) {
    return findVoteByRating;
  }

  const databaseVote = votesRepository.create(vote);

  await votesRepository.save(databaseVote);

  return databaseVote;
}

export async function getVotes(): Promise<Vote[]> {
  const votesRepository = getRepository(Vote);

  const users = await votesRepository.find();
  return users;
}
