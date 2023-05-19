import { Component, Input } from "@angular/core";
import { FormDesignerService } from "../form-designer.service";

@Component({
  selector: "meplus-form-field",
  templateUrl: "./form-field.component.html",
  styleUrls: ["./form-field.component.css"]
})
export class FormFieldComponent {

  fieldConfig: any;
  field: any;

  @Input()
  set formField(formField: any) {
    if (formField) {
      this.field = formField;
      this.fieldConfig = formField.rendererConfig();
    }
  }

  constructor(private formDesigner: FormDesignerService) {
  }

  activate() {
    this.formDesigner.selectField(this.field);
  }
}
