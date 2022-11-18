import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { GithubService, IRepository } from '../../services/github.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {
  repoDetail$: Observable<IRepository> | null = null;
  constructor(private githubService: GithubService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    const owner = this.route.snapshot.paramMap.get('owner');
    const name = this.route.snapshot.paramMap.get('name');
    this.repoDetail$ = this.githubService.getRepositoryDetail(owner, name);
  }
}
