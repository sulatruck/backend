import { getRepository } from 'typeorm';

import Service from './ServiceModel';

export async function saveService(
  _: void,
  { input: service }: { [argName: string]: Service },
): Promise<Service> {
  const servicesRepository = getRepository(Service);

  const databaseService = servicesRepository.create(service);

  await servicesRepository.save(databaseService);

  return databaseService;
}

export async function getService(): Promise<Service[]> {
  const serviceRepository = getRepository(Service);

  const service = await serviceRepository.find();
  return service;
}
