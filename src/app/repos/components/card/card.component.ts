import {Component, HostBinding, Input, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {IRepository} from "../../services/github.service";

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  @HostBinding('class.repo-card') containerClass = true;
  @Input() item: any;

  constructor(private route: Router) { }

  ngOnInit(): void {
  }

  get link() {
    return `detail/${this.item.owner.login}/${this.item.name}`;
  }
}
