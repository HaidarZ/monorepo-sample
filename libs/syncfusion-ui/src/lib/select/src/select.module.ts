import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { FormlySyncfusionFormFieldModule } from '@meplus/syncfusion-ui/form-field';
import { FormlySelectModule } from '@ngx-formly/core/select';
import { FormlyModule } from '@ngx-formly/core';
import { FormlyFieldSelect } from './select.type';
import { DropDownListModule, MultiSelectModule } from '@syncfusion/ej2-angular-dropdowns';



@NgModule({
  declarations: [FormlyFieldSelect],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormlySyncfusionFormFieldModule,
    FormlySelectModule,
    DropDownListModule,
    MultiSelectModule,
    FormlyModule.forChild({
      types: [
        {
          name: 'select',
          component: FormlyFieldSelect,
          wrappers: ['form-field'],
        },
        { name: 'enum', extends: 'select' },
      ],
    }),
  ],
  schemas: [NO_ERRORS_SCHEMA],
})
export class FormlySyncfusionSelectModule { }
