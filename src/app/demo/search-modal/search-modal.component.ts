import { Component, Input, OnInit, Output, ViewChild, EventEmitter, AfterViewInit , ElementRef, Renderer2} from '@angular/core';
import { UiModalComponent } from '../../theme/shared/components/modal/ui-modal/ui-modal.component';
import {ChangeDetectorRef } from '@angular/core';
import {NgModel} from "@angular/forms";

import {Subscription} from 'rxjs';
import {
  NgbDatepicker, 
  NgbInputDatepicker, 
  NgbDateStruct, 
  NgbCalendar, 
  NgbDateAdapter,
  NgbDateParserFormatter} from '@ng-bootstrap/ng-bootstrap';

  const now = new Date();
  const equals = (one: NgbDateStruct, two: NgbDateStruct) =>
    one && two && two.year === one.year && two.month === one.month && two.day === one.day;
  
  const before = (one: NgbDateStruct, two: NgbDateStruct) =>
    !one || !two ? false : one.year === two.year ? one.month === two.month ? one.day === two.day
      ? false : one.day < two.day : one.month < two.month : one.year < two.year;
  
  const after = (one: NgbDateStruct, two: NgbDateStruct) =>
    !one || !two ? false : one.year === two.year ? one.month === two.month ? one.day === two.day
      ? false : one.day > two.day : one.month > two.month : one.year > two.year;
@Component({
  selector: 'app-search-modal',
  templateUrl: './search-modal.component.html',
  styleUrls: ['./search-modal.component.scss']
})
export class SearchModalComponent implements OnInit  {
  @ViewChild(UiModalComponent) uimoadal : UiModalComponent;
  @Input() incometype: any;
  @Input() date: any;
  @Input() status: any;
  @Input() title: any;
  @Input() member: any;
  @Input() upliner: any;
  @Input() introducer: any;
  @Input() side: any;
  @Input() invoiceno: any;
  @Input() amount: any;
  @Input() productcode: any;
  @Input() statusItems: any;
  @Input() incomeTypeItems: any;
  @Input() sidesItem:any;
  @Output() closeModal = new EventEmitter();
  @Output() sendSearchData = new EventEmitter();
  
  startDate: NgbDateStruct;
    maxDate: NgbDateStruct;
    minDate: NgbDateStruct;
    hoveredDate: NgbDateStruct;
    fromDate: any;
    toDate: any;
    model: any;
    private _subscription: Subscription;
    private _selectSubscription: Subscription;
    @ViewChild("d") input: NgbInputDatepicker;
    @ViewChild(NgModel) datePick: NgModel;
    @ViewChild('myRangeInput') myRangeInput: ElementRef;

    isHovered = date => 
    this.fromDate && !this.toDate && this.hoveredDate && after(date, this.fromDate) && before(date, this.hoveredDate)
    isInside = date => after(date, this.fromDate) && before(date, this.toDate);
    isFrom = date => equals(date, this.fromDate);
    isTo = date => equals(date, this.toDate);

  constructor(private cdref: ChangeDetectorRef,element: ElementRef, private renderer: Renderer2, private _parserFormatter: NgbDateParserFormatter) { 
    
  }

  ngOnInit(){
    this.startDate = {year: now.getFullYear(), month: now.getMonth() + 1, day: now.getDate()};
        this.maxDate = { year: now.getFullYear() + 1, month: now.getMonth() + 1, day: now.getDate()};
        this.minDate = {year: now.getFullYear() - 1, month: now.getMonth() + 1, day: now.getDate()};
  }

  ngAfterViewInit(){
      this.uimoadal.show();
      this.cdref.detectChanges();
  }
  onDateSelection(date: NgbDateStruct) {
    let parsed = '';
    if (!this.fromDate && !this.toDate) {
        this.fromDate = date;
    } else if (this.fromDate && !this.toDate && after(date, this.fromDate)) {
        this.toDate = date;
        // this.model = `${this.fromDate.year} - ${this.toDate.year}`;
        this.input.close();
    } else {
        this.toDate = null;
        this.fromDate = date;
    }
    if(this.fromDate) {
      parsed += this._parserFormatter.format(this.fromDate);
    }
    if(this.toDate) {
      parsed += ' - ' + this._parserFormatter.format(this.toDate);
    }
   
    this.renderer.setProperty(this.myRangeInput.nativeElement, 'value', parsed);
}
closeModals(){
    this.closeModal.emit('false');
  }
  search(){
    this.sendSearchData.emit("here send the form builder value");
    this.closeModals();
  }
  
}
