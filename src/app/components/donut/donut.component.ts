import { Component, Input, OnInit } from '@angular/core';
import { ChartData } from 'chart.js';

@Component({
  selector: 'app-donut',
  templateUrl: './donut.component.html',
  styles: [
  ]
})
export class DonutComponent implements OnInit {
  @Input() title: string = 'No Title';
  @Input() labels: string[] = [];
  @Input() data: number[] = [];
  
  // Doughnut
  public doughnutChartLabels: string[] = [];
  public doughnutChartData: ChartData<'doughnut'> = {
    labels: this.doughnutChartLabels,
    datasets: [
      { data: [ 0, 0, 0 ] },
    ]
  };
  
  public backgroundColors: string[] = [ '#6857E6', '#009FEE', '#F0259'];
  
  constructor() {
    this.doughnutChartData.datasets[0].backgroundColor = this.backgroundColors;
    this.doughnutChartData.labels = this.labels;
    this.doughnutChartData.datasets[0].data = this.data;
  }
  
  ngOnInit(): void {
    this.doughnutChartData.labels = this.labels;
    this.doughnutChartData.datasets[0].data = this.data;
  } 
}
