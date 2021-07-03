import {Component, EventEmitter, Input, OnChanges, OnInit, Output} from '@angular/core';
import ApexCharts from 'apexcharts/dist/apexcharts.common.js';
import {ApexChartService} from './apex-chart.service';

@Component({
  selector: 'app-apex-chart',
  templateUrl: './apex-chart.component.html',
  styleUrls: ['./apex-chart.component.scss']
})
export class ApexChartComponent implements OnChanges {
  @Input() chartID: string;
  @Input() chartConfig: any;
  @Input() xAxis: any;
  @Input() newData: any;
  @Input()  dropdownchange: any; 
  @Input()  dropdownchangeMonthly: any;
  @Input() type: any;
  @Output() changedData:EventEmitter<string> =   new EventEmitter();
  @Output() changedDataMonthly:EventEmitter<string> =   new EventEmitter();
  public chart: any;
  public selectDate:string = '1';
  public selectDateMonthly:string='30';
  constructor(private apexEvent: ApexChartService) { }

  ngOnChanges() {
    //console.log('coming',this.dropdownchange,this.dropdownchangeMonthly);
    this.updateData();
  }
  updateData(){
    setTimeout(() => {
      document.querySelector('#' + this.chartID).innerHTML = '';
      this.chart = new ApexCharts(document.querySelector('#' + this.chartID), this.chartConfig);
      this.chart.render();
    });

    this.apexEvent.changeTimeRange.subscribe(() => {
      if (this.xAxis) {
        this.chart.updateOptions({
          xaxis: this.xAxis
        });
      }
    });

    this.apexEvent.changeSeriesData.subscribe(() => {
      if (this.newData) {
        this.chart.updateSeries([{
          data: this.newData
        }]);
      }
    });
  }
  changeData(type){
    if(type === 'yearly'){
      this.changedData.emit(this.selectDate);
    }
    else{
      this.changedDataMonthly.emit(this.selectDateMonthly);
    }
  }

}
