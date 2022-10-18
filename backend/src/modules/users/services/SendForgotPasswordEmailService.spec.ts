import FakeMailProvider from '@shared/container/providers/MailProvider/fakes/FakeMailProvider';
import AppError from '@shared/errors/AppError';
// import FakeHashProvider from '../providers/HashProvider/fakes/FakeHaskProvider';
import FakeUsersRepository from '../repositories/fakes/FakeUsersRepository';
import SendForgotPasswordEmailService from './SendForgotPasswordEmailService';

describe('CreateUser', () => {
  it('should be able to recover the password using the email', async () => {
    const fakeUsersSRepository = new FakeUsersRepository();
    const fakeMailProvider = new FakeMailProvider();

    const sendMail = jest.spyOn(fakeMailProvider, 'sendMail');

    const sendForgotPasswordEmail = new SendForgotPasswordEmailService(
      fakeUsersSRepository,
      fakeMailProvider,
    );

    await fakeUsersSRepository.create({
      name: 'John Doe',
      email: 'johndoe@exemple.com',
      password: '123456',
    });

    await sendForgotPasswordEmail.execute({
      email: 'johndoe@exemple.com',
    });

    expect(sendMail).toHaveBeenCalled();
  });

  it('should not be able to recover the non-existing user password', async () => {
    const fakeUsersSRepository = new FakeUsersRepository();
    const fakeMailProvider = new FakeMailProvider();

    const sendForgotPasswordEmail = new SendForgotPasswordEmailService(
      fakeUsersSRepository,
      fakeMailProvider,
    );

    await expect(
      sendForgotPasswordEmail.execute({
        email: 'johndoe@exemple.com',
      }),
    ).rejects.toBeInstanceOf(AppError);
  });
});
