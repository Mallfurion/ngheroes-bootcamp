import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-repo-search',
  templateUrl: './repo-search.component.html',
  styleUrls: ['./repo-search.component.scss']
})
export class RepoSearchComponent implements OnInit {
  @Output() search: EventEmitter<string> = new EventEmitter();
  value: string = '';
  constructor() {}

  ngOnInit(): void {}

  doSearch() {}
}
