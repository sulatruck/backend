import { getRepository } from 'typeorm';

import Feedback from './FeedbackModel';

export async function saveFeedback(
  _: void,
  { input: feedback }: { [argName: string]: Feedback },
): Promise<Feedback> {
  const feedbackRepository = getRepository(Feedback);

  const databaseFeedback = feedbackRepository.create(feedback);

  await feedbackRepository.save(databaseFeedback);

  return databaseFeedback;
}

export async function getFeedback(): Promise<Feedback[]> {
  const feedbackRepository = getRepository(Feedback);

  const feedback = await feedbackRepository.find();
  return feedback;
}
