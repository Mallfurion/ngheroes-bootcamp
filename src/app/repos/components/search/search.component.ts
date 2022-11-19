import { Component, OnInit } from '@angular/core';
import { mockedData } from 'src/app/data';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  searchValue: string = '';
  data = mockedData;

  constructor() { }

  ngOnInit(): void {
  }

  search() {
    this.data = mockedData.filter((r) => r.name.includes(this.searchValue));
  }

}
