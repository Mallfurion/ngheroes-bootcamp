import {Injectable} from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {map} from "rxjs/operators";

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

  constructor(private http: HttpClient) {
  }

  getRepos(): Observable<IRepository[]> {
    return this.http.get(`${this.apiURL}search/repositories?q=stars:>10000`).pipe(map((payload: any) => payload.items));
  }

  getRepo(owner: string | null, repo: string | null): Observable<any> {
    return this.http.get<any>(`${this.apiURL}repos/${owner}/${repo}`);
  }
}
