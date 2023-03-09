import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormlyWrapperFormField } from './form-field.wrapper';
import { FormlyModule } from '@ngx-formly/core';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [FormlyWrapperFormField],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormlyModule.forChild({
      wrappers: [
        {
          name: 'form-field',
          component: FormlyWrapperFormField,
        },
      ],
    }),
  ],
})
export class FormlySyncfusionFormFieldModule {}
