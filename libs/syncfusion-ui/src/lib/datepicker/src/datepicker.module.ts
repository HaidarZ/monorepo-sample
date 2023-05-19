import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { DatePickerModule } from '@syncfusion/ej2-angular-calendars';
import { FormlyFieldDatepicker } from './datepicker.type';
import { FormlyModule } from '@ngx-formly/core';
import { FormlySyncfusionFormFieldModule } from '../../form-field';



@NgModule({
  declarations: [FormlyFieldDatepicker],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    DatePickerModule,
    FormlySyncfusionFormFieldModule,
    FormlyModule.forChild({
      types: [
        {
          name: 'datepicker',
          component: FormlyFieldDatepicker,
          wrappers: ['form-field'],
        },
      ],
    }),
  ]
})
export class FormlySyncfusionDatepickerModule { }
