import { Component, ChangeDetectionStrategy, Type } from '@angular/core';
import { FieldType, FieldTypeConfig, FormlyFieldConfig } from '@ngx-formly/core';
import { FormlyFieldProps } from '../../form-field/src/form-field.wrapper';

interface DatepickerProps extends FormlyFieldProps {
  datepickerOptions?: Partial<{
    dataFormat: string;
    min: any;
    max: any;
    startView: 'month' | 'year' | 'decade';
    cssClass: string | null;
  }>;
}

export interface FormlyDatepickerFieldConfig extends FormlyFieldConfig<DatepickerProps> {
  type: 'datepicker' | Type<FormlyFieldDatepicker>;
}

@Component({
  selector: 'meplus-formly-field-primeng-datepicker',
  template: `
      <ejs-datepicker
        [id]="id"
        [format]="props.datepickerOptions?.dataFormat"
        [min]='props.datepickerOptions?.min'
        [max]='props.datepickerOptions?.max'
        [start]="props.datepickerOptions?.startView"
        [readonly]="props.readonly"
        [cssClass]="props.datepickerOptions?.cssClass"
        [placeholder]="props.placeholder"
        [formControl]="formControl"
        [formlyAttributes]="field"
      ></ejs-datepicker>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormlyFieldDatepicker extends FieldType<FieldTypeConfig<DatepickerProps>> {

  override defaultOptions = {
    props: {
      datepickerOptions: {
        startView: 'month' as const,
      },
    },
  };
}
