import FakeCacheProvider from '@shared/container/providers/CacheProvider/fakes/FakeCacheProvider';
import FakeAppointmentsRepository from '../repositories/fakes/FakeAppointmentsRepository';
import ListProvidersAppointmentsService from './LIstProviderAppointmentsService';
// import AppError from '@shared/errors/AppError';

let listProvidersAppointment: ListProvidersAppointmentsService;
let fakeAppointmentsRepository: FakeAppointmentsRepository;
let cacheProvider: FakeCacheProvider;

describe('ListProvidersAppointments', () => {
  beforeEach(() => {
    fakeAppointmentsRepository = new FakeAppointmentsRepository();
    cacheProvider = new FakeCacheProvider();

    listProvidersAppointment = new ListProvidersAppointmentsService(
      fakeAppointmentsRepository,
      cacheProvider,
    );
  });

  it('should be able to list the appointments on a specific day', async () => {
    const appointment1 = await fakeAppointmentsRepository.create({
      provider_id: 'provider-id',
      user_id: 'user-id',
      date: new Date(2022, 4, 20, 14, 0, 0),
    });

    const appointment2 = await fakeAppointmentsRepository.create({
      provider_id: 'provider-id',
      user_id: 'user-id',
      date: new Date(2022, 4, 20, 15, 0, 0),
    });

    // jest.spyOn(Date, 'now').mockImplementationOnce(() => {
    //   return new Date(2022, 4, 20, 11, 0, 0).getTime();
    // });

    const appointments = await listProvidersAppointment.execute({
      provider_id: 'provider-id',
      year: 2022,
      month: 5,
      day: 20,
    });

    expect(appointments).toEqual([appointment1, appointment2]);
  });
});
