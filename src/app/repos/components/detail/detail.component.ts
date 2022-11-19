import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { GithubService } from '../../services/github.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {
  $repo: Observable<any> | null = null;
  constructor(private githubService: GithubService, private activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.$repo = this.githubService.getRepo(
      this.activatedRoute.snapshot.params['owner'],
      this.activatedRoute.snapshot.params['repo']
    );
  }
}
