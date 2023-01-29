import { Component } from '@angular/core';

@Component({
  selector: 'zf-submission-search',
  templateUrl: './submission-search.component.html',
  styleUrls: ['./submission-search.component.scss']
})
export class SubmissionSearchComponent {
  stateOptions: any[];

  paymentOptions: any[];

  justifyOptions: any[];

  value1: string = "off";

  value2: number = 0;

  value3: any;

  constructor() {
      this.stateOptions = [{label: 'Off', value: 'off'}, {label: 'On', value: 'on'}];

      this.paymentOptions = [
          {name: 'Option 1', value: 1},
          {name: 'Option 2', value: 2},
          {name: 'Option 3', value: 3}
      ];

      this.justifyOptions = [
          {icon: 'pi pi-align-left', justify: 'Left'},
          {icon: 'pi pi-align-right', justify: 'Right'},
          {icon: 'pi pi-align-center', justify: 'Center'},
          {icon: 'pi pi-align-justify', justify: 'Justify'}
      ];
  }
}
