import { Component, NgZone } from '@angular/core';
import { DummyServiceService } from './dummy.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html'
})
export class AppComponent {
  title = 'myapp';
  data: any[] = [];
  page: number = 0;

  constructor(private dataService: DummyServiceService) {

  }

  ngOnInit() {
    this.fetchData();
  }

  fetchData(page?: number) {
    this.dataService.getLatestStories(page).subscribe(
      (data: any[]) => this.data.push(...data)
    );
  }

  onScroll() {
    console.log('Scrolled...');
    this.fetchData(this.page++);
  }
}
