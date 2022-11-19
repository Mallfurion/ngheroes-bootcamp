import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Observable} from "rxjs";
import {GithubService, IRepository} from "../../services/github.service";

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {

  repo$: Observable<IRepository>|null = null;

  constructor(private route: ActivatedRoute,
              private githubService: GithubService) {
  }

  ngOnInit(): void {
    let owner = this.route.snapshot.paramMap.get("owner");
    let repoName = this.route.snapshot.paramMap.get("repo");
    this.repo$ = this.githubService.getRepo(owner, repoName);
  }

}
