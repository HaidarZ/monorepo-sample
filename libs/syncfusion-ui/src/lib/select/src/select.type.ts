import { Component, ChangeDetectionStrategy, ViewChild, NgZone, Type, ViewContainerRef } from '@angular/core';
import { SelectControlValueAccessor } from '@angular/forms';
import { FieldTypeConfig, FormlyFieldConfig } from '@ngx-formly/core';
import { FieldType, FormlyFieldProps } from '@meplus/syncfusion-ui/form-field';
import { take } from 'rxjs/operators';
import { FormlyFieldSelectProps } from '@ngx-formly/core/select';

interface SelectProps extends FormlyFieldProps, FormlyFieldSelectProps {
  multiple?: boolean;
  compareWith?: (o1: any, o2: any) => boolean;
}

export interface FormlySelectFieldConfig extends FormlyFieldConfig<SelectProps> {
  type: 'select' | Type<FormlyFieldSelect>;
}

@Component({
  selector: 'meplus-formly-field-select',
  template: `
    <ejs-multiselect
      *ngIf="props.multiple; else singleSelect"
      [id]="id"
      [formControl]="formControl"
      [formlyAttributes]="field"
      [dataSource]="props.options | formlySelectOptions : field | async"
      [required]="props.required || false"
      [tabIndex]="props.tabindex"
      [placeholder]="props.placeholder"
      [showClearButton]="!props.required"
      [fields]="{text:'label',value:'value'}"
      mode="Default"
      [allowCustomValue]="false"
      [allowFiltering]='true'>
    </ejs-multiselect>

    <ng-template #singleSelect>
      <ejs-dropdownlist
      [id]="id"
      [formControl]="formControl"
      [formlyAttributes]="field"
      [dataSource]="props.options | formlySelectOptions : field | async"
      [required]="props.required || false"
      [tabIndex]="props.tabindex"
      [placeholder]="props.placeholder"
      [showClearButton]="!props.required"
      [fields]="{text:'label',value:'value'}"
      [allowFiltering]='true'>
      </ejs-dropdownlist>
    </ng-template>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormlyFieldSelect extends FieldType<FieldTypeConfig<SelectProps>> {

  constructor(private ngZone: NgZone, hostContainerRef: ViewContainerRef) {
    super(hostContainerRef);
  }
}
