import {Component, OnInit} from '@angular/core';
import {GithubService} from "../../services/github.service";
import {Observable} from "rxjs";

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  repos$: Observable<any> = this.githubService.getRepos();

  constructor(private githubService: GithubService) {
  }

  ngOnInit(): void {
  }

}
