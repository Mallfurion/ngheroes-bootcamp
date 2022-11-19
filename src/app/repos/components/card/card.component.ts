import { Component, HostBinding, Input, OnInit } from '@angular/core';
import { IRepository } from '../../service/github.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  @HostBinding('class.repo-card')containerClass = true;
  @Input() itemDetails: IRepository;

  get link() {
    return `detail/${this.itemDetails.owner.login}/${this.itemDetails.name}`;
  }

  constructor() {}

  ngOnInit(): void {
  }

}
