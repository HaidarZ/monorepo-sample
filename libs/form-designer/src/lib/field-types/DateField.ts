import { FieldTypeBase } from "./field-type-base";

export class DateField extends FieldTypeBase<Date | string> {
  override type = "datepicker";

  override getSettingsRendererConfig() {
    return [
      ...super.getSettingsRendererConfig(),
      {
        type: "input",
        key: "props.datepickerOptions.dataFormat",
        props: {
          label: "Data Format"
        }
      },
      {
        type:"checkbox",
        key: "props.datepickerOptions.min",
        props: {
          "label": "Min"
        }
      }
    ]
  }
}
