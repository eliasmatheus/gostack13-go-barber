import AppError from '@shared/errors/AppError';
import FakeHashProvider from '../providers/HashProvider/fakes/FakeHashProvider';
import FakeUsersRepository from '../repositories/fakes/FakeUsersRepository';
import CreateUserService from './CreateUserService';

describe('CreateUser', () => {
  it('should be able to create a new user', async () => {
    const fakeUsersSRepository = new FakeUsersRepository();
    const fakeHashProvider = new FakeHashProvider();

    const createAppointment = new CreateUserService(
      fakeUsersSRepository,
      fakeHashProvider,
    );

    const user = await createAppointment.execute({
      name: 'John Doe',
      email: 'johndoe@exemple.com',
      password: '123456',
    });

    expect(user).toHaveProperty('id');
  });

  it('should not be able to create a new user with existing email', async () => {
    const fakeUsersSRepository = new FakeUsersRepository();
    const fakeHashProvider = new FakeHashProvider();

    const createAppointment = new CreateUserService(
      fakeUsersSRepository,
      fakeHashProvider,
    );

    await createAppointment.execute({
      name: 'John Doe',
      email: 'johndoe@exemple.com',
      password: '123456',
    });

    await expect(
      createAppointment.execute({
        name: 'John Doe',
        email: 'johndoe@exemple.com',
        password: '123456',
      }),
    ).rejects.toBeInstanceOf(AppError);
  });
});