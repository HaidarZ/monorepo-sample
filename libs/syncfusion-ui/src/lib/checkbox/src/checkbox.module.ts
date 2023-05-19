import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { FormlyFieldCheckbox } from './checkbox.type';
import { FormlySyncfusionFormFieldModule } from '../../form-field';
import { FormlyModule } from '@ngx-formly/core';



@NgModule({
  declarations: [
    FormlyFieldCheckbox
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormlySyncfusionFormFieldModule,
    FormlyModule.forChild({
      types: [
        {
          name: 'checkbox',
          component: FormlyFieldCheckbox,
          wrappers: ['form-field'],
        },
        {
          name: 'boolean',
          extends: 'checkbox',
        },
      ],
    }),
  ],
})
export class FormlySyncfusionCheckboxModule { }
