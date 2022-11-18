import { Component, HostBinding, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-repo-card',
  templateUrl: './repo-card.component.html',
  styleUrls: ['./repo-card.component.scss']
})
export class RepoCardComponent implements OnInit {
  @HostBinding('class.repo-card') containerClass = true;
  @Input() item: any;

  constructor() {}

  ngOnInit(): void {}
}
