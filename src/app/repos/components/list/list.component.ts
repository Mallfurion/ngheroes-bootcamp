import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { GithubService } from '../../services/github.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  $repos: Observable<any> = this.githubService.getRepos();

  constructor(private githubService: GithubService) {}

  ngOnInit(): void {}

  openNewTab(url: string) {
    window.open(url, '_blank');
  }
}
