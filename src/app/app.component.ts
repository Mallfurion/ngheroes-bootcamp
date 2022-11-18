import { Component } from '@angular/core';
import { mockedData } from './data';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'JS Heroes Bootcamp';
  data = mockedData;
  searchValue: string = '';

  openNewTab(url: string) {
    window.open(url, '_blank');
  }

  search() {
    this.data = mockedData.filter((r) => r.name.includes(this.searchValue));
  }
}
