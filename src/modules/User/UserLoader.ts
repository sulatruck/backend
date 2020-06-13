import { getRepository } from 'typeorm';

import User from './UserModel';

export async function saveUser(
  _: void,
  { input: user }: { [argName: string]: User },
): Promise<User> {
  const usersRepository = getRepository(User);

  const databaseUser = usersRepository.create(user);

  await usersRepository.save(databaseUser);

  return databaseUser;
}

export async function getUsers(): Promise<User[]> {
  const usersRepository = getRepository(User);

  const users = await usersRepository.find();
  return users;
}
