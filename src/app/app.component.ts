import { Component } from '@angular/core';
import { ChartComponent, ChartOptions } from './chart/chart.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ChartComponent],
  template: `
    <io-chart [options]="chartOptions"></io-chart>
  `
})
export class AppComponent {
  chartOptions: ChartOptions = {
    type: 'column',
    title: 'Sample Chart',
    series: [
      { name: 'A', value: 30, color: 'red' },
      { name: 'B', value: 70, color: 'blue' },
      { name: 'C', value: 50, color: 'green' },
    ],
  };
}
