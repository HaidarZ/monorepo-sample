import { FieldTypeBase } from "./field-type-base";

export class CheckboxField extends FieldTypeBase<string> {
  override type = "checkbox";
}
