import { FieldTypeBase } from "./field-type-base";

export class TextField extends FieldTypeBase<string> {
  override type = "input";
}
