import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class GraphDataService {
    private subject = new Subject<any>();
    public bar1CA: any;
    creategraph(retail_income,retail_binary,first_purchase,xAxis) {
        this.bar1CA  = {
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
            colors: ['#1abc9c', '#0e9e4a', '#ffa21d', '#ff5252'],
            responsive: [{
                breakpoint: 1330,
                  options: {
                    chart: {
                        width: 620
                    }
                  }
                },{
            breakpoint: 1288,
              options: {
                chart: {
                    width: 600
                }
              }
            },
             {breakpoint: 1213,
              options: {
                chart: {
                    width: 580
                }
              }
            },
            {breakpoint: 1181,
                options: {
                  chart: {
                      width: 560
                  }
                }
              },
              {breakpoint: 1143,
              options: {
                chart: {
                    width: 450
                }
              }
            },{breakpoint: 992,
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
              name: 'Retail Income',
              data: retail_income
            }, {
              name: 'Retail Binary',
              data: retail_binary
            }, {
              name: 'First Purchase',
              data: first_purchase
            }],
            xaxis: {
              categories: xAxis,
            },
            
            legend: {
              position: 'top',
              offsetY: 20
            },
            fill: {
              opacity: 1
            },
          };
        console.log("created",this.bar1CA)
        this.subject.next(this.bar1CA);
    }

    clearMessages() {
        //this.bar1CA.chart.width = 900;
        this.subject.next(this.bar1CA);
    }

    getGraph(): Observable<any> {
        this.subject.next(this.bar1CA);
        console.log('oooo',this.subject.asObservable())
        return this.subject.asObservable();
    }
}