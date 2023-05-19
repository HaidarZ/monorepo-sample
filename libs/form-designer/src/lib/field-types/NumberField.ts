import { FieldTypeBase } from "./field-type-base";

export class NumberField extends FieldTypeBase<string> {
  override type = "number";
}
