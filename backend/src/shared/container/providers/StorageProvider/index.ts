import { container } from 'tsyringe';

import DiskStorageProvider from './implementations/DiscStorageProvider';
import IStorageProvider from './models/IStorageProvider';

container.registerSingleton<IStorageProvider>(
  'StorageProvider',
  DiskStorageProvider,
);
