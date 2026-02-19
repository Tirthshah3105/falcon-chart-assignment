import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

export interface ChartSeries {
  name: string;
  value: number;
  color: string;
}

export interface ChartOptions {
  type: 'column' | 'line' | 'pie';
  title: string;
  series: ChartSeries[];
}

@Component({
  selector: 'io-chart',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss'],
})
export class ChartComponent {
  @Input() options!: ChartOptions;

  get maxValue(): number {
    return Math.max(...this.options.series.map((s) => s.value));
  }

  get scaledSeries(): { name: string; scaledValue: number; color: string }[] {
    return this.options.series.map((s) => ({
      name: s.name,
      scaledValue: (s.value / this.maxValue) * 100,
      color: s.color,
    }));
  }

  getLinePointsSVG(): string {
    return this.scaledSeries
      .map((series, i) => `${60 + i * 100},${250 - series.scaledValue * 2}`)
      .join(' ');
  }

  getSliceDasharray(index: number): string {
    const circumference = Math.PI * 160;
    const sliceLength = (this.scaledSeries[index].scaledValue / 100) * circumference;
    return `${sliceLength} ${circumference}`;
  }

  getSliceDashoffset(index: number): number {
    const circumference = Math.PI * 160;
    let offset = 0;
    for (let i = 0; i < index; i++) {
      offset += (this.scaledSeries[i].scaledValue / 100) * circumference;
    }
    return -offset;
  }
}
