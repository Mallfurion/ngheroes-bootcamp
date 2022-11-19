import { Component, HostBinding, Input, OnInit } from '@angular/core';
import { IRepository } from '../../services/github.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  @HostBinding('class.repo-card') containerClass = true;
  @Input() item: any;
  constructor() {}

  get link() {
    return `detail/${this.item.owner.login}/${this.item.name}`;
  }

  ngOnInit(): void {}
}
