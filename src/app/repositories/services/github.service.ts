import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { mockedData } from 'src/app/data';

@Injectable({
  providedIn: 'root'
})
export class GithubService {
  constructor() {}

  getRepositories() {
    return of(mockedData);
  }
}
