import { Component, OnInit, ViewChild } from '@angular/core';
import { SupportChartData1} from './chart/support-chart-data-1';
import { SupportChartData2} from './chart/support-chart-data-2';
import { SeoChart1 } from './chart/seo-chart-1';
import { SeoChart2 } from './chart/seo-chart-2';
import { SeoChart3 } from './chart/seo-chart-3';
import { PowerCardChart1 } from './chart/power-card-chart-1';
import { PowerCardChart2 } from './chart/power-card-chart-2';
import { HttpClient } from '@angular/common/http';
import { ApexChartComponent } from '../../../theme/shared/components/chart/apex-chart/apex-chart.component';
import { ChartDB } from 'src/app/fack-db/chart-data';
import { AuthServicesService } from 'src/app/core/services/auth-services.service';
import { OwlOptions, SlidesOutputData } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-dash-default',
  templateUrl: './dash-default.component.html',
  styleUrls: ['./dash-default.component.scss']
})

export class DashDefaultComponent implements OnInit {
  slideConfig = {"slidesToShow": 6, "slidesToScroll": 1,'autoplay': true};
  slideConfig1 = {"slidesToShow": 3, "slidesToScroll": 1,'autoplay': true,'vertical': true,};
  slickInit(e) {
    console.log('slick initialized');
  }
  
  breakpoint(e) {
    //console.log('breakpoint');
  }
  
  afterChange(e) {
    //console.log('afterChange');
  }
  
  beforeChange(e) {
    //console.log('beforeChange');
  }  
  // public supportChartData1: any;
  // public supportChartData2: any;
  // public seoChartData1: any;
  // public seoChartData2: any;
  // public seoChartData3: any;
  // public powerCardChartData1: any;
  // public powerCardChartData2: any;
  userData:any;
  dashBoardData: any;
  memberData: any;
  public chartDB: any;
  memberIncomeData:any;
  memberWalletData:any;
  directMember:any;
  rankMember:any;
  public lastDate: number;
  public line2CAC: any;
  public bar1CAC: any;
  public data: any;
  public retail_income:any =[];
  public retail_binary:any = [];
  public first_purchase:any = [];
  public consistancy:any = [];
  public xAxis:any = [];
  public intervalSub: any;
  public intervalMain: any;
  public date_range:number=1;
  public dailyVisitorStatus: string;
  public dailyVisitorAxis: any;
  monthlyGraph:any;
  yearlyGraph;any;
  @ViewChild(ApexChartComponent, { static: false }) apexChart: ApexChartComponent;
  constructor(
    private auth:AuthServicesService) {

    // this.supportChartData1 = SupportChartData1.supportChartData;
    // this.supportChartData2 = SupportChartData2.supportChartData;
    // this.seoChartData1 = SeoChart1.seoChartData;
    // this.seoChartData2 = SeoChart2.seoChartData;
    // this.seoChartData3 = SeoChart3.seoChartData;
    // this.powerCardChartData1 = PowerCardChart1.powerCardChartData;
    // this.powerCardChartData2 = PowerCardChart2.powerCardChartData;

    this.chartDB = ChartDB;

    this.lastDate = 0;
    this.data = [];

    this.getDayWiseTimeSeries(new Date('11 Feb 2017 GMT').getTime(), 10, {min: 10, max: 90});
    this.line2CAC = {
      chart: {
        height: 300,
        type: 'line',
        animations: {
          enabled: true,
          easing: 'linear',
          dynamicAnimation: {
            speed: 2000
          }
        },
        toolbar: {
          show: false
        },
        zoom: {
          enabled: false
        }
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        curve: 'smooth'
      },
      series: [{
        data: this.data
      }],
      colors: ['#1abc9c'],
      title: {
        text: 'Dynamic Updating Chart',
        align: 'left'
      },
      markers: {
        size: 0
      },
      xaxis: {
        type: 'datetime',
        range: 777600000,
      },
      yaxis: {
        max: 100
      },
      legend: {
        show: false
      }
    };
    
    this.bar1CAC = {
      chart: {
        height: 350,
        type: 'bar',
      },
      plotOptions: {
        bar: {
          horizontal: false,
          columnWidth: '55%',
          endingShape: 'rounded'
        },
      },
      dataLabels: {
        enabled: false
      },
      colors: ['#0e9e4a', '#1abc9c', '#e74c3c'],
      stroke: {
        show: true,
        width: 2,
        colors: ['transparent']
      },
      series: [{
        name: 'Retail Income',
        data: this.retail_income
      }, {
        name: 'Retail Binary',
        data: this.retail_binary
      }, {
        name: 'First Purchase',
        data: this.first_purchase
      }],
      xaxis: {
        categories: this.xAxis,
      },
      yaxis: {
        title: {
          text: '$ (thousands)'
        }
      },
      fill: {
        opacity: 1
  
      },
      tooltip: {
        y: {
          formatter: (val) => '$ ' + val + ' thousands'
        }
      }
    };
    this.dailyVisitorStatus = '1y';
  }

  
  ngOnInit(): void {
    //this.loadTestApiData();
    this.userData = JSON.parse(localStorage.getItem('userData'));
    this.loadMemberIncome();
    this.loadMemberWallet();
    this.directMemberSlider();
    this.raankMemberSlider();
    this.getMonthlyWiseGraphdata();
    this.getYearlyWiseGraphdata();
  }

  getOwlOptions(){
   
  }

  loadMemberIncome() {
    const user = {
      username: this.userData.username,
      login_type: this.userData.login_type,
      auth_token: this.userData.auth_token
    };
    this.auth.memberIncomeApi(user).subscribe((res) => {
      this.memberIncomeData = res['result'];
    });
  }

  loadMemberWallet() {
    const user = {
      username: this.userData.username,
      login_type: this.userData.login_type,
      auth_token: this.userData.auth_token
    };
    this.auth.memberWalletApi(user).subscribe((res) => {
      this.memberWalletData = res['result'];
    });
  }

  directMemberSlider(){
    const user = {
      username: this.userData.username,
      login_type: this.userData.login_type,
      auth_token: this.userData.auth_token
    };
    this.auth.directMemberApi(user).subscribe((res) => {
      this.directMember = res['result'];
    });
  }

  raankMemberSlider(){
    const user = {
      username: this.userData.username,
      login_type: this.userData.login_type,
      auth_token: this.userData.auth_token
    };
    this.auth.rankMemberApi(user).subscribe((res) => {
      this.rankMember = res['result'];
    });
  }
  
  getDayWiseTimeSeries(baseval, count, yrange) {
    let i = 0;
    while (i < count) {
      const x = baseval;
      const y = Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min;

      this.data.push({x, y});
      this.lastDate = baseval;
      baseval += 86400000;
      i++;
    }
  }

  getYearlyWiseGraphdata(){
    const user = {
      username: this.userData.username,
      login_type: this.userData.login_type,
      auth_token: this.userData.auth_token,
      date_range:this.date_range
    };
    this.auth.yearlyGraphApi(user).subscribe((res: any) => {
      this.yearlyGraph = res.data_array;
      res.x_array.map(d=>{
        this.xAxis.push(d);
      })
      this.yearlyGraph.map(data=>{
        this.retail_income.push(data.retail_income);
        this.retail_binary.push(data.retail_binary);
        this.first_purchase.push(data.first_purchase);
        this.consistancy.push(data.consistancy);
       
        
      })
    });
  }
  changeData(e){
    this.date_range = e;
    this.getYearlyWiseGraphdata();
  }
  getMonthlyWiseGraphdata(){
    const user = {
      username: this.userData.username,
      login_type: this.userData.login_type,
      auth_token: this.userData.auth_token,
      date_range:30
    };
    this.auth.monthlyGraphApi(user).subscribe((res) => {
      this.monthlyGraph = res['result'];
    });
  }

}
