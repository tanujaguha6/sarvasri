import { Component, OnInit, ViewChild } from '@angular/core';
import { SupportChartData1 } from './chart/support-chart-data-1';
import { SupportChartData2 } from './chart/support-chart-data-2';
import { SeoChart1 } from './chart/seo-chart-1';
import { SeoChart2 } from './chart/seo-chart-2';
import { SeoChart3 } from './chart/seo-chart-3';
import { PowerCardChart1 } from './chart/power-card-chart-1';
import { PowerCardChart2 } from './chart/power-card-chart-2';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';
// import { ApexChartComponent } from '../../../theme/shared/components/chart/apex-chart/apex-chart.component';
import { ChartDB } from 'src/app/fack-db/chart-data';
import { AuthServicesService } from '../../../core/services/auth-services.service';
import { GraphDataService } from '../../../core/services/graph-data.service';

import { OwlOptions, SlidesOutputData } from 'ngx-owl-carousel-o';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dash-default',
  templateUrl: './dash-default.component.html',
  styleUrls: ['./dash-default.component.scss']
})

export class DashDefaultComponent implements OnInit {
  slideConfig = {
    "slidesToShow": 6, "slidesToScroll": 1, 'autoplay': false, 'infinite': false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1
        }
      }
    ]
  };
  slideConfig1 = {
    "slidesToShow": 3, "slidesToScroll": 1, 'autoplay': false, 'infinite': false, 'vertical': true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1
        }
      }
    ]
  };
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
  userData: any;
  dashBoardData: any;
  memberData: any;
  public chartDB: any;
  memberIncomeData: any;
  memberWalletData: any;
  directMember: any;
  rankMember: any;
  public lastDate: number;
  public line2CAC: any;
  public bar1CAC: any;
  public bar2CAC: any;
  public data: any;
  public retail_income: any = [];
  public retail_binary: any = [];
  public first_purchase: any = [];
  public consistancy: any = [];
  public xAxis: any = [];
  public monthlyxAxis: any = [];
  public total_income: any = [];
  public intervalSub: any;
  public intervalMain: any;
  public date_range: number = 1;
  public date_range_monthly: number = 30;
  public dailyVisitorStatus: string;
  public dailyVisitorAxis: any;
  public dropdownchange: any;
  public dropdownchangeMonthly: any;
  public monthly = 'monthly';
  public yearly = 'yearly';
  //public graphData = new Subject<object>();
  public dataGraph: any;
  monthlyGraph: any;
  yearlyGraph; any;
  // @ViewChild(ApexChartComponent, { static: false }) apexChart: ApexChartComponent;
  constructor(
    private auth: AuthServicesService,
    private router: Router,
    private graph: GraphDataService) {

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

    this.getDayWiseTimeSeries(new Date('11 Feb 2017 GMT').getTime(), 10, { min: 10, max: 90 });

    // this.bar1CAC  = {
    //   chart: {
    //     height: 350,
    //     width: 850,
    //     type: 'bar',
    //     stacked: true,
    //     toolbar: {
    //       show: true
    //     },
    //     zoom: {
    //       enabled: true
    //     }
    //   },
    //   dataLabels: {
    //     enabled: false
    //   },
    //   colors: ['#1abc9c', '#0e9e4a', '#ffa21d', '#ff5252'],
    //   responsive: [{
    //     breakpoint: 480,
    //     options: {
    //       legend: {
    //         position: 'bottom',
    //         // offsetX: -10,
    //         // offsetY: 0
    //       }
    //     }
    //   }],
    //   plotOptions: {
    //     bar: {
    //       horizontal: false,
    //     },
    //   },
    //   series: [{
    //     name: 'Retail Income',
    //     data: this.retail_income
    //   }, {
    //     name: 'Retail Binary',
    //     data: this.retail_binary
    //   }, {
    //     name: 'First Purchase',
    //     data: this.first_purchase
    //   }, {
    //     name: 'Consistancy',
    //     data: this.consistancy
    //   }],
    //   xaxis: {
    //     categories: this.xAxis,
    //   },

    //   legend: {
    //     position: 'right',
    //     offsetY: 20
    //   },
    //   fill: {
    //     opacity: 1
    //   },
    // };

    this.bar2CAC = {
      chart: {
        height: 350,
        width: 658,
        type: 'bar',
        stacked: true,
        toolbar: {
          show: false
        },
        zoom: {
          enabled: true
        }
      },
      dataLabels: {
        enabled: false
      },
      colors: ['#1abc9c'],
      responsive: [{
        breakpoint: 1330,
        options: {
          chart: {
            width: 620
          }
        }
      }, {
        breakpoint: 1288,
        options: {
          chart: {
            width: 600
          }
        }
      },
      {
        breakpoint: 1213,
        options: {
          chart: {
            width: 580
          }
        }
      },
      {
        breakpoint: 1181,
        options: {
          chart: {
            width: 560
          }
        }
      },
      {
        breakpoint: 1143,
        options: {
          chart: {
            width: 680
          }
        }
      }, {
        breakpoint: 992,
        options: {
          chart: {
            width: "100%"
          }
        }
      }],
      plotOptions: {
        bar: {
          horizontal: false,
        },
      },
      series: [{
        name: 'Total Income',
        data: this.total_income
      }],
      xaxis: {
        categories: this.monthlyxAxis,
      },

      legend: {
        position: 'top',
        offsetY: 20
      },
      fill: {
        opacity: 1
      },
    };
    this.dailyVisitorStatus = '1y';
  }


  ngOnInit(): void {
    //this.loadTestApiData();
    this.graph.getGraph().subscribe(res => {
      this.dataGraph = res;
    })
    this.userData = JSON.parse(localStorage.getItem('userData'));
    if (this.userData === null) {
      this.router.navigate(['/auth/signin']);
    } else {
      this.loadMemberIncome();
      this.loadMemberWallet();
      this.directMemberSlider();
      this.raankMemberSlider();
      this.getMonthlyWiseGraphdata();
      this.getYearlyWiseGraphdata();
      this.graph.creategraph(this.retail_income, this.retail_binary, this.first_purchase, this.xAxis);
    }
  }

  getOwlOptions() {

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

  directMemberSlider() {
    const user = {
      username: this.userData.username,
      login_type: this.userData.login_type,
      auth_token: this.userData.auth_token
    };
    this.auth.directMemberApi(user).subscribe((res) => {
      this.directMember = res['result'];
    });
  }

  raankMemberSlider() {
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

      this.data.push({ x, y });
      this.lastDate = baseval;
      baseval += 86400000;
      i++;
    }
  }

  getYearlyWiseGraphdata() {

    const user = {
      username: this.userData.username,
      login_type: this.userData.login_type,
      auth_token: this.userData.auth_token,
      date_range: this.date_range
    };
    this.auth.yearlyGraphApi(user).subscribe((res: any) => {
      if (res) {
        this.yearlyGraph = res.data_array;

        this.dropdownchange = this.yearlyGraph;
        res.x_array.map(d => {
          this.xAxis.push(d);
        })
        this.yearlyGraph.map(data => {
          this.retail_income.push(data.retail_income);
          this.retail_binary.push(data.retail_binary);
          this.first_purchase.push(data.first_purchase);
          this.consistancy.push(data.consistancy);
        })
      }
    });
  }
  refresh() {
    this.xAxis.length = 0;
    this.retail_income.length = 0;
    this.retail_binary.length = 0;
    this.first_purchase.length = 0;
    this.consistancy.length = 0;
  }
  changeData(e) {
    this.refresh();
    this.date_range = e;
    this.getYearlyWiseGraphdata();
  }
  changeDataMonthly(e) {
    this.monthlyxAxis.length = 0;
    this.total_income.length = 0;
    this.date_range_monthly = e;
    this.getMonthlyWiseGraphdata();
  }
  getMonthlyWiseGraphdata() {
    const user = {
      username: this.userData.username,
      login_type: this.userData.login_type,
      auth_token: this.userData.auth_token,
      date_range: this.date_range_monthly
    };
    this.auth.monthlyGraphApi(user).subscribe((res: any) => {
      if (res) {
        this.monthlyGraph = res.data_array;
        this.dropdownchangeMonthly = this.monthlyGraph;
        res.x_array.map(d => {
          this.monthlyxAxis.push(d.income_date);
        })
        this.monthlyGraph.map(data => {
          this.total_income.push(data.total_income);
        })
      }
    });
  }

}
