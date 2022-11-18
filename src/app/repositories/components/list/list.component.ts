import { Component, OnInit } from '@angular/core';
import { GithubService } from '../../services/github.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  repositories$ = this.githubService.getRepositories();

  constructor(private githubService: GithubService) {}

  ngOnInit(): void {}
}
