import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {NextConfig} from '../../../../app-config';
import ApexCharts from 'apexcharts/dist/apexcharts.common.js';
import {DashDefaultComponent} from '../../../../demo/dashboard/dash-default/dash-default.component';
import {ApexChartComponent} from '../../../shared/components/chart/apex-chart/apex-chart.component';
import { GraphDataService } from '../../../../core/services/graph-data.service';

@Component({
  providers:[DashDefaultComponent,ApexChartComponent],
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {
  public flatConfig: any;
  public menuClass: boolean;
  public collapseStyle: string;
  public windowWidth: number;
  public chart:any;
  @Output() onNavCollapse = new EventEmitter();
  @Output() onNavHeaderMobCollapse = new EventEmitter();

  constructor(private graphdata:GraphDataService,private dashdefault:DashDefaultComponent) {
    this.flatConfig = NextConfig.config;
    this.menuClass = false;
    this.collapseStyle = 'none';
    this.windowWidth = window.innerWidth;
  }

  ngOnInit() { }

  toggleMobOption() {
    this.menuClass = !this.menuClass;
    this.collapseStyle = (this.menuClass) ? 'block' : 'none';
  }

  navCollapse() {
    if (this.windowWidth >= 992) {
      this.graphdata.clearMessages();
      
      this.onNavCollapse.emit();
    } else {
      this.onNavHeaderMobCollapse.emit();
    }
  }

}
