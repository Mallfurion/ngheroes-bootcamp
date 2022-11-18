import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, of, tap } from 'rxjs';
import { IRepository } from '../models/repository.interface';

@Injectable({
  providedIn: 'root'
})
export class GithubService {
  apiURL = 'https://api.github.com/';
  constructor(private http: HttpClient) {}

  getRepositories(): Observable<IRepository[]> {
    return this.http.get(`${this.apiURL}search/repositories?q=stars:>10000`).pipe(map((res: any) => res.items));
  }

  getRepositoryDetail(owner: any, name: any): Observable<IRepository> {
    return this.http.get<IRepository>(`${this.apiURL}repos/${owner}/${name}`);
  }
}
