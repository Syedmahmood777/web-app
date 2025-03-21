import { Component, EventEmitter, Input, Output, OnChanges, SimpleChanges } from '@angular/core';

/**
 * Create GLIM Account Preview Step
 */
@Component({
  selector: 'mifosx-glim-preview-step',
  templateUrl: './glim-preview-step.component.html',
  styleUrls: ['./glim-preview-step.component.scss']
})
export class GlimPreviewStepComponent implements OnChanges {
  /** Loans Account Template */
  @Input() loansAccountTemplate: any = [];
  /** Loans Account Product Template */
  @Input() loansAccountProductTemplate: any;
  /** Loans Account Data */
  @Input() loansAccount: any;
  /** Submit Loans Account */
  @Output() submitEvent = new EventEmitter();

  /** Charges Displayed Columns */
  chargesDisplayedColumns: string[] = [
    'name',
    'chargeCalculationType',
    'amount',
    'chargeTimeType',
    'date'
  ];
  /** Overdue Charges Displayed Columns */
  overdueChargesDisplayedColumns: string[] = [
    'name',
    'type',
    'amount',
    'collectedon'
  ];

  productEnableDownPayment = false;

  constructor() {}

  ngOnChanges(changes: SimpleChanges): void {
    this.productEnableDownPayment = this.loansAccountProductTemplate.product.enableDownPayment;
  }
}
