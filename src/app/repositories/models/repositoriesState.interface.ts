import { IRepository } from './repository.interface';

export interface RepositoriesStateInterface {
  isLoading: boolean;
  repositories: IRepository[];
  error: string | null;
}
