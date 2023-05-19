import { Component, ChangeDetectionStrategy, Type } from '@angular/core';
import { FieldTypeConfig, FormlyFieldConfig } from '@ngx-formly/core';
import { FieldType, FormlyFieldProps } from '@meplus/syncfusion-ui/form-field';

interface InputProps extends FormlyFieldProps {}

export interface FormlyInputFieldConfig extends FormlyFieldConfig<InputProps> {
  type: 'input' | Type<FormlyFieldInput>;
}

@Component({
  selector: 'meplus-formly-field-sf-input',
  template: `
    <input
      *ngIf="props.type !== 'number'; else numberTmp"
      class="e-input"
      [id]="id"
      [type]="props.type || 'text'"
      [readonly]="props.readonly"
      [required]="props.required || false"
      [formControl]="formControl"
      [tabIndex]="props.tabindex"
      [placeholder]="props.placeholder"
      [formlyAttributes]="field"
    />
    <ng-template #numberTmp>
      <ejs-numerictextbox
      [id]="id"
      [formControl]="formControl"
      [readonly]="props.readonly"
      [required]="props.required || false"
      [tabIndex]="props.tabindex"
      [placeholder]="props.placeholder"
      [formlyAttributes]="field">
    </ejs-numerictextbox>
    </ng-template>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormlyFieldInput extends FieldType<FieldTypeConfig<InputProps>> {}
