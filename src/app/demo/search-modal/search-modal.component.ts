import { Component, Input, OnInit, Output, ViewChild, EventEmitter, AfterViewInit , ElementRef, Renderer2} from '@angular/core';
import { UiModalComponent } from '../../theme/shared/components/modal/ui-modal/ui-modal.component';
import {ChangeDetectorRef } from '@angular/core';
import {NgModel} from "@angular/forms";
import { FormGroup, FormControl, Validators } from '@angular/forms'
import { FormBuilder } from '@angular/forms'
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
  @Input() selected_incometype: any;
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
  @Input() dropdownData: any;
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
    searchForm;
    isHovered = date => 
    this.fromDate && !this.toDate && this.hoveredDate && after(date, this.fromDate) && before(date, this.hoveredDate)
    isInside = date => after(date, this.fromDate) && before(date, this.toDate);
    isFrom = date => equals(date, this.fromDate);
    isTo = date => equals(date, this.toDate);

  constructor(private cdref: ChangeDetectorRef,
              element: ElementRef, 
              private renderer: Renderer2, 
              private _parserFormatter: NgbDateParserFormatter,
              private formBuilder: FormBuilder) { 
                let srchForm = JSON.parse(localStorage.getItem('searchFilter'));
               
                this.searchForm = this.formBuilder.group({
                  income_type: [srchForm?srchForm.income_type:''],
                  date: [srchForm?srchForm.date:''],
                  status: [srchForm?srchForm.status:''],
                  mem_code: [srchForm?srchForm.mem_code:''],
                  upliner_code: [srchForm?srchForm.upliner_code:''],
                  upliner_side: [srchForm?srchForm.upliner_side:''],
                  intro_code: [srchForm?srchForm.intro_code:''],
                  invoice_no: [srchForm?srchForm.invoice_no:''],
                  amount: [srchForm?srchForm.amount:''],
                  pdt_code: [srchForm?srchForm.pdt_code:''],
                  date_custom: [srchForm?srchForm.date_custom:'']
                });
    
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
      parsed += ' / ' + this._parserFormatter.format(this.toDate);
    }
   
    this.renderer.setProperty(this.myRangeInput.nativeElement, 'value', parsed);
}
closeModals(){
    this.uimoadal.hide();
    this.closeModal.emit('false');
  }
  search(){
    if(this.myRangeInput){
    this.searchForm.controls['date'].setValue(this.myRangeInput.nativeElement.value);
    }
    localStorage.setItem('searchFilter',JSON.stringify(this.searchForm.value))
    this.sendSearchData.emit(this.searchForm.value);
    this.closeModals();
  }
  
}
