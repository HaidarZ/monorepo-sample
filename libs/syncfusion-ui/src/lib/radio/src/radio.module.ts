import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormlyFieldRadio } from './radio.type';
import { ReactiveFormsModule } from '@angular/forms';
import { FormlySelectModule } from '@ngx-formly/core/select';
import { FormlyModule } from '@ngx-formly/core';
import { FormlySyncfusionFormFieldModule } from '../../form-field';



@NgModule({
  declarations: [FormlyFieldRadio],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormlySyncfusionFormFieldModule,
    FormlySelectModule,
    FormlyModule.forChild({
      types: [
        {
          name: 'radio',
          component: FormlyFieldRadio,
          wrappers: ['form-field'],
        },
      ],
    }),
  ]
})
export class FormlySyncfusionRadioModule { }
