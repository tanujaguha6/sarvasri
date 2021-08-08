import {Component, EventEmitter, Input, OnChanges, OnInit, Output} from '@angular/core';
import ApexCharts from 'apexcharts/dist/apexcharts.common.js';
import {ApexChartService} from './apex-chart.service';
import { GraphDataService } from '../../../../../core/services/graph-data.service';

import * as $ from 'jquery';

@Component({
  selector: 'app-apex-chart',
  templateUrl: './apex-chart.component.html',
  styleUrls: ['./apex-chart.component.scss']
})
export class ApexChartComponent implements OnChanges {
  @Input() chartID: any;
  @Input() chartConfig: any;
  @Input() xAxis: any;
  @Input() newData: any;
  @Input()  dropdownchange: any; 
  @Input()  dropdownchangeMonthly: any;
  @Input() type: any;
  @Input() dropdownData: any;
  @Output() changedData:EventEmitter<string> =   new EventEmitter();
  @Output() changedDataMonthly:EventEmitter<string> =   new EventEmitter();
  public chart: any;
  public selectDate:string = '1';
  public selectDateMonthly:string='30';
  constructor(private apexEvent: ApexChartService, private graph: GraphDataService) { }

  ngOnChanges() {
    //console.log('coming',this.dropdownchange,this.dropdownchangeMonthly);
    this.updateData();
    this.getDropdown();
    console.log(this.dropdownData)
  }
  getDropdown(){
    let userData = JSON.parse(localStorage.getItem('userData'));
    this.graph.graphDropdown(userData).subscribe(res => {
      this.dropdownData = res['result'];
    })
  }
  updateData(){
    // let chartId = $('#chartIDs').val();
    // let chartconfig= $('#chartConfig').val();
    // this.chartID = this.chartID?this.chartID:chartId;
    // this.chartConfig = this.chartID?this.chartID:chartconfig;
    
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
