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

  openNewTab(url: string) {
    window.open(url, '_blank');
  }
}
