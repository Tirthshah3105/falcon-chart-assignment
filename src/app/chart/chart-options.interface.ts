export interface ChartSeries {
  name: string;
  value: number;
  color?: string;
}

export interface ChartOptions {
  type: 'column' | 'bar' | 'line' | string;
  title?: string;
  series: ChartSeries[];
}