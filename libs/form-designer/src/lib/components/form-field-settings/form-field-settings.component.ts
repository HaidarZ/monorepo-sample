import { Component } from "@angular/core";
import { FormDesignerService } from "../form-designer.service";
import { FieldTypeBase } from "../../field-types/field-type-base";
import { FormlyFieldConfig } from "@ngx-formly/core";
import { FormGroup } from "@angular/forms";
import { debounceTime } from "rxjs";

@Component({
  selector: "meplus-form-field-settings",
  templateUrl: "./form-field-settings.component.html",
  styleUrls: ["./form-field-settings.component.css"]
})
export class FormFieldSettingsComponent {
  form: FormGroup = new FormGroup({}, {
    updateOn: "change"
  });
  field: FieldTypeBase<any> | undefined;
  settingsFields: FormlyFieldConfig[] = [];
  settingsModel = {};

  constructor(private formDesigner: FormDesignerService) {
    this.formDesigner.formFieldSelected$.pipe(

    ).subscribe((field: FieldTypeBase<any>) => {
      this.field = field;
      this.settingsFields = [...field.getSettingsRendererConfig()];
      this.settingsModel = { ...field.rendererConfig() };
      this.form.valueChanges.pipe(
        debounceTime(200)
      ).subscribe((value: any) => {
        console.log("value", value);
        field?.applySettingsRendererConfig(value);
      });
    });
  }
}
