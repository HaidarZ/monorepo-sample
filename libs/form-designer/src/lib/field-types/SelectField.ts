import { FieldTypeBase } from "./field-type-base";
import { computed } from "@angular/core";

export class SelectField extends FieldTypeBase<string | number> {
  override type = "select";
  options: { label: string, value: string }[];

  constructor(props: any) {
    super(props);
    this.options = props.options || [];
  }

  override rendererConfig = computed(() => {
    return {
      ...super.rendererConfig(),
      props: {
        ...super.rendererConfig().props,
        options: this.options
      }
    };
  });



}
