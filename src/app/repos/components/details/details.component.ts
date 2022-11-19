import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { GithubService } from '../../service/github.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {
  repoDetails$: Observable<any> | null;
  queryParams: any;

  constructor(private githubService: GithubService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.queryParams = this.route.snapshot.params;
    this.repoDetails$ = this.githubService
      .getReposDetails(this.queryParams.owner, this.queryParams.repo);
  }
}
