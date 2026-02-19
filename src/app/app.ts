import { Component, signal } from '@angular/core';
import { ChartComponent, ChartOptions } from './chart/chart.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ChartComponent],
  template: `
    <div class="app-wrapper">
      <header>
        <h1>{{ title() }}</h1>
        <p>Reusable Chart Components</p>
      </header>
      
      <main class="charts-container">
        <io-chart [options]="columnChart"></io-chart>
        <io-chart [options]="lineChart"></io-chart>
        <io-chart [options]="pieChart"></io-chart>
      </main>
    </div>
  `,
  styles: [`
    .app-wrapper {
      min-height: 100vh;
      background: #f5f5f5;
    }
    
    header {
      background: #fff;
      border-bottom: 1px solid #e5e5e5;
      padding: 2rem;
      text-align: center;
    }
    
    h1 {
      margin: 0;
      font-size: 2rem;
      color: #1f2937;
    }
    
    p {
      margin: 0.5rem 0 0 0;
      color: #6b7280;
    }
    
    .charts-container {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(450px, 1fr));
      gap: 2rem;
      padding: 2rem;
      max-width: 1400px;
      margin: 0 auto;
    }
  `]
})
export class App {
  title = signal('Falcon Charts');
  
  columnChart: ChartOptions = {
    type: 'column',
    title: 'Monthly Sales',
    series: [
      { name: 'Jan', value: 65, color: '#3b82f6' },
      { name: 'Feb', value: 59, color: '#8b5cf6' },
      { name: 'Mar', value: 80, color: '#ec4899' },
    ],
  };
  
  lineChart: ChartOptions = {
    type: 'line',
    title: 'User Engagement',
    series: [
      { name: 'Week 1', value: 30, color: '#10b981' },
      { name: 'Week 2', value: 45, color: '#10b981' },
      { name: 'Week 3', value: 55, color: '#10b981' },
      { name: 'Week 4', value: 75, color: '#10b981' },
    ],
  };
  
  pieChart: ChartOptions = {
    type: 'pie',
    title: 'Market Distribution',
    series: [
      { name: 'Product A', value: 40, color: '#f59e0b' },
      { name: 'Product B', value: 30, color: '#06b6d4' },
      { name: 'Product C', value: 20, color: '#6366f1' },
      { name: 'Other', value: 10, color: '#ef4444' },
    ],
  };
}
