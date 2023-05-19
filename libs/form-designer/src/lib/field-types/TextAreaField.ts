import { FieldTypeBase } from "./field-type-base";

export class TextAreaField extends FieldTypeBase<string> {
  override type = "textarea";

  constructor(options: any = {}) {
    options.props = {
      ...options.props,
      rows: 3
    };
    super(options);
  }

  override getSettingsRendererConfig() {
    return [
      ...super.getSettingsRendererConfig(),
      {
        type: "input",
        key: "props.rows",
        props: {
          type: "number",
          label: "Number of rows"
        }
      },
      {
        type: "input",
        key: "props.cols",
        props: {
          type: "number",
          label: "Number of columns"
        }
      }
    ];
  }
}
