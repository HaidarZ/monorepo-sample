import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormlyFieldInput } from './input.type';
import { NumericTextBoxModule } from "@syncfusion/ej2-angular-inputs";
import { ReactiveFormsModule } from '@angular/forms';
import { FormlyModule } from '@ngx-formly/core';
import { FormlySyncfusionFormFieldModule } from '@meplus/syncfusion-ui/form-field';

@NgModule({
  declarations: [FormlyFieldInput],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormlySyncfusionFormFieldModule,
    NumericTextBoxModule,
    FormlyModule.forChild({
      types: [
        {
          name: 'input',
          component: FormlyFieldInput,
          wrappers: ['form-field'],
        },
        { name: 'string', extends: 'input' },
        {
          name: 'number',
          extends: 'input',
          defaultOptions: {
            props: {
              type: 'number',
            },
          },
        },
        {
          name: 'integer',
          extends: 'input',
          defaultOptions: {
            props: {
              type: 'number',
            },
          },
        },
      ],
    })]
})
export class FormlySyncfusionInputModule { }
