import { Component, ChangeDetectionStrategy, Type } from '@angular/core';
import { FieldTypeConfig, FormlyFieldConfig } from '@ngx-formly/core';
import { FieldType, FormlyFieldProps } from '../../form-field';
import { FormControl } from '@angular/forms';

interface RadioProps extends FormlyFieldProps {
  formCheck?: 'default' | 'inline';
}

export interface FormlyRadioFieldConfig extends FormlyFieldConfig<RadioProps> {
  type: 'radio' | Type<FormlyFieldRadio>;
}

@Component({
  selector: 'meplus-formly-field-radio',
  template: `
<fieldset>
    <div class="space-y-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-10">
      <div class="flex items-center" *ngFor="let option of props.options | formlySelectOptions : field | async; let i = index">
        <input type="radio"
          class="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
          [id]="id + '_' + i"
          [name]="field.name || id"
          [class.is-invalid]="showError"
          [attr.value]="option.value"
          [value]="option.value"
          [formControl]="option.disabled ? disabledControl : formControl"
          [formlyAttributes]="field"
        >
        <label [for]="id + '_' + i" class="ml-3 block text-sm font-medium leading-6 text-gray-900">{{ option.label }}</label>
      </div>
    </div>
  </fieldset>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormlyFieldRadio extends FieldType<FieldTypeConfig<RadioProps>> {
  override defaultOptions = {
    props: {
      formCheck: 'default' as const,
    },
  };

  get disabledControl() {
    return new FormControl({ value: this.formControl.value, disabled: true });
  }
}
