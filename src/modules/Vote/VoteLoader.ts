import { getRepository } from 'typeorm';

import Vote from './VoteModel';

export async function saveVote(
  _: void,
  { input: vote }: { [argName: string]: Vote },
): Promise<Vote> {
  const votesRepository = getRepository(Vote);

  const databaseVote = votesRepository.create(vote);

  await votesRepository.save(databaseVote);

  return databaseVote;
}

export async function getVotes(): Promise<Vote[]> {
  const votesRepository = getRepository(Vote);

  const users = await votesRepository.find();
  return users;
}
