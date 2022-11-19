import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, of, pipe } from 'rxjs';

export interface IRepository {
  id?: number;
  name?: string;
  description?: string;
  owner: { login: string };
  url?: string;
}

@Injectable({
  providedIn: 'root'
})
export class GithubService {
  apiUrl = 'https://api.github.com/';

  constructor(private http: HttpClient) {}

  getRepos(): Observable<IRepository[]> {
    return this.http
      .get<IRepository>(`${this.apiUrl}search/repositories?q=stars:>10000`)
      .pipe(map((payload: any) => payload.items));
  }

  getRepo(owner: string, repoName: string): Observable<IRepository> {
    return this.http.get<IRepository>(`${this.apiUrl}repos/${owner}/${repoName}`).pipe(map((payload: any) => payload));
  }
}
