export interface IRepository {
  id?: number;
  name?: string;
  description?: string;
  owner: { login: string };
  url?: string;
}
