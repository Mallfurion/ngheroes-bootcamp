import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, of, pipe } from 'rxjs';
// import {HttpClient} from

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
  apiURL = 'https://api.github.com/';
  constructor(private http: HttpClient) {}

  // getRepos(): Observable<IReposData[]> {
  //   return of(mockedData);
  // }

  getRepos(): Observable<IRepository[]> {
    return this.http
      .get(`${this.apiURL}search/repositories?q=stars:>10000`)
      .pipe(map((response: any) => response.items));
  }

  getReposDetails(owner: string, repo: string): Observable<any> {
    return this.http.get(`${this.apiURL}repos/${owner}/${repo}`);
  }
}
