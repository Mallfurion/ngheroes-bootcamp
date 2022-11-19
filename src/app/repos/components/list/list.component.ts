import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { GithubService, IRepository } from '../../service/github.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  repos$: Observable<IRepository[]> = this.githubService.getRepos();

  constructor(private githubService: GithubService, private router: Router) {}

  ngOnInit(): void {
  }

  // goToItemDetails(item: IRepository) {
  //   this.router.navigate(['detail/', item.owner.login, item.name]);
  // }
}
