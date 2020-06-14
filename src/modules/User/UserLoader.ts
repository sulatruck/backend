import { getRepository } from 'typeorm';

import User from './UserModel';

interface LoginProps {
  email: string;
  password: string;
}

export async function saveUser(
  _: void,
  { input: user }: { [argName: string]: User },
): Promise<User> {
  const usersRepository = getRepository(User);

  const databaseUser = usersRepository.create(user);

  await usersRepository.save(databaseUser);

  delete databaseUser?.password;

  return databaseUser;
}

export async function getUsers(): Promise<User[]> {
  const usersRepository = getRepository(User);

  const users = (await usersRepository.find()).map(user => {
    delete user.password;
    return user;
  });

  return users;
}

export async function login(
  _: void,
  { input: props }: { [argName: string]: LoginProps },
): Promise<User | undefined> {
  const usersRepository = getRepository(User);

  const { email, password } = props;

  const databaseUser = await usersRepository.findOne({
    where: {
      email,
      password,
    },
  });

  delete databaseUser?.password;

  return databaseUser;
}
