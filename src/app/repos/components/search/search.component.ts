import { Component, OnInit } from '@angular/core';
import {mockedData} from "../../../data";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  data = mockedData;
  searchValue: string = '';

  constructor() { }

  ngOnInit(): void {
  }

  search() {
    this.data = mockedData.filter((r) => r.name.includes(this.searchValue));
  }

}
