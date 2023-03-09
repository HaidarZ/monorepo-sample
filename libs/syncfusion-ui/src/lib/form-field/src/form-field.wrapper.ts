import { Component } from '@angular/core';
import {
  FieldWrapper,
  FormlyFieldConfig,
  FormlyFieldProps as CoreFormlyFieldProps,
} from '@ngx-formly/core';

export interface FormlyFieldProps extends CoreFormlyFieldProps { }

@Component({
  selector: 'meplus-formly-wrapper-form-field',
  template: `
    <div class="mb-3">
      <label [for]="fieldComponent" className="block text-sm font-medium leading-6 text-gray-900">
        {{ props.label }}
      </label>
      <div class="mt-2">
        <ng-container #fieldComponent></ng-container>
      </div>
      <div *ngIf="showError" class="e-error">
        <formly-validation-message [field]="field"></formly-validation-message>
      </div>
      <p *ngIf="props.description"  class="mt-2 text-sm text-gray-500">{{props.description}}</p>
    </div>
  `,
})
export class FormlyWrapperFormField extends FieldWrapper<
  FormlyFieldConfig<CoreFormlyFieldProps>
> { }
