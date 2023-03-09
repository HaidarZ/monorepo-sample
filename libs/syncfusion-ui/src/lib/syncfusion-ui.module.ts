import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormlySyncfusionFormFieldModule } from '@meplus/syncfusion-ui/form-field';
import { FormlySyncfusionInputModule } from '@meplus/syncfusion-ui/input';
import { FormlySyncfusionSelectModule } from '@meplus/syncfusion-ui/select';

@NgModule({
  imports: [
    CommonModule,
    FormlySyncfusionFormFieldModule,
    FormlySyncfusionInputModule,
    FormlySyncfusionSelectModule
  ]
})
export class FormlySyncfusionUiModule { }
